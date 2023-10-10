import { Component, OnInit, ViewChild } from '@angular/core';
import { Peer } from "peerjs";
import { LoginServiceService } from '../services/login-service.service';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.page.html',
  styleUrls: ['./call.page.scss'],
})
export class CallPage implements OnInit {

  public tipoUser: any;
  public tipoId: any;
  constructor(
    private logServ: LoginServiceService,
    private vetSrv: VeterinariosServiceService
  ) {

  }
  ngOnInit() {


  }

  room_id: any = null;
  // @ts-ignore
  getUserMedia = (navigator.getUserMedia || navigator?.webkitGetUserMedia || navigator?.mozGetUserMedia).bind(navigator);
  local_stream: any;
  screenStream: any;
  peer: any;
  currentPeer = null
  screenSharing = false

  deterUser() {
    this.logServ.loggedUser.id.subscribe((res: any) => {
      this.tipoUser = res;
      console.log(this.tipoUser);
    })
  }

 

  createRoom() {
    console.log("Creating Room")
    // @ts-ignore
    let room = `${this.logServ.loggedUser.id}_${this.vetSrv.selectedVet.id}`;

   console.log("room:   " + room);
    if (room == " " || room == "") {
      alert("ingrese un numero de sala")
      return;
    }
    this.room_id = room;
    this.peer = new Peer(this.room_id)
    this.peer.on('open', (id: any) => {
      console.log("Peer Connected with ID: ", id)
      this.hideModal()
      this.getUserMedia({ video: true, audio: true }, (stream: any) => {
        this.local_stream = stream;
        this.setLocalStream(this.local_stream)
      }, (err: any) => {
        console.log(err)
      })
      this.notify("esperando para unirse")
    })
    this.peer.on('call', (call: any) => {
      call.answer(this.local_stream);
      call.on('stream', (stream: any) => {
        this.setRemoteStream(stream)
      })
      this.currentPeer = call;
    })
  }

  setLocalStream(stream: any) {

    let video = document?.getElementById("local-video");
    // @ts-ignore
    video.srcObject = stream;
    // @ts-ignore
    video.muted = true;
    // @ts-ignore
    video.play();
  }
  setRemoteStream(stream: any) {

    let video = document.getElementById("remote-video");
    // @ts-ignore
    video.srcObject = stream;
    // @ts-ignore
    video.play();
  }

  hideModal() {
    // @ts-ignore
    document?.getElementById("entry-modal")?.hidden = true
  }

  notify(msg: any) {
    let notification = document.getElementById("notification")
    // @ts-ignore
    notification.innerHTML = msg
    // @ts-ignore
    notification.hidden = false
    setTimeout(() => {
      // @ts-ignore
      notification.hidden = true;
    }, 3000)
  }

  joinRoom() {
    console.log("Joining Room")
    // @ts-ignore
    let room = document.getElementById("room-input").value;
    if (room == " " || room == "") {
      alert("ingrese un numero de sala")
      return;
    }
    this.room_id = room;
    this.hideModal()
    this.peer = new Peer()
    this.peer.on('open', (id: any) => {
      console.log("Conectado con Id: " + id)
      this.getUserMedia({ video: true, audio: true }, (stream: any) => {
        this.local_stream = stream;
        this.setLocalStream(this.local_stream)
        this.notify("conectandose")
        let call = this.peer.call(this.room_id, stream)
        call.on('stream', (stream: any) => {
          this.setRemoteStream(stream);
        })
        this.currentPeer = call;
      }, (err: any) => {
        console.log(err)
      })

    })
  }

  startScreenShare() {
    if (this.screenSharing) {
      this.stopScreenSharing()
    }
    navigator.mediaDevices.getDisplayMedia({ video: true }).then((stream) => {
      this.screenStream = stream;
      let videoTrack = this.screenStream.getVideoTracks()[0];
      videoTrack.onended = () => {
        this.stopScreenSharing()
      }
      if (this.peer) {
        // @ts-ignore
        let sender = this.currentPeer?.peerConnection.getSenders().find(function (s) {
          return s.track.kind == videoTrack.kind;
        })
        sender.replaceTrack(videoTrack)
        this.screenSharing = true
      }
      console.log(this.screenStream)
    })
  }

  stopScreenSharing() {
    if (!this.screenSharing) return;
    let videoTrack = this.local_stream.getVideoTracks()[0];
    if (this.peer) {
      // @ts-ignore
      let sender = this.currentPeer.peerConnection.getSenders().find(function (s: any) {
        return s.track.kind == videoTrack.kind;
      })
      sender.replaceTrack(videoTrack)
    }
    this.screenStream.getTracks().forEach(function (track: any) {
      track.stop();
    });
    this.screenSharing = false
  }
}
