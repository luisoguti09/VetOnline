import { Injectable } from '@angular/core';
import { CallPage } from '../call/call.page';
import { Peer } from "peerjs";

@Injectable({
  providedIn: 'root'
})
export class CallService {

  public room_id: any = null;
  public getUserMedia = (  public getUserMedia = (navigator.getUserMedia || navigator?.webkitGetUserMedia || navigator?.mozGetUserMedia).bind(navigator);
).bind(navigator);
  public local_stream: any;
  public screenStream: any;
  public peer: any;
  public currentPeer = null
  public screenSharing = false

  constructor(
    private call: CallPage,
  ) { }

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

}
