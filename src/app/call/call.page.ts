import { Component, OnInit, ViewChild } from '@angular/core';
import { Peer } from "peerjs";

@Component({
  selector: 'app-call',
  templateUrl: './call.page.html',
  styleUrls: ['./call.page.scss'],
})
export class CallPage implements OnInit {
  /*@ViewChild('localVideo') localVideo: any;
  @ViewChild('remoteVideo') remoteVideo: any;

  private client: any;
  private localStream: any;
  private remoteStream: any;

  private peer: Peer;
  peerIdShare: string = "";
  peerId: string = "";
  private lazyStream: any;
  currentPeer: any;
  private peerList: Array<any> = [];

  constructor(private ngxAgoraService: NgxAgoraSdkNgService) {
    this.peer = new Peer();
  }

  ngOnInit() {
    this.getPeerId();

  }
  public startVideoCall(): void {

   }

  public stopVideoCall(): void {


  }
  private getPeerId = () => {
    //Generate unique Peer Id for establishing connection
        this.peer.on('open', (id) => {
          this.peerId = id;
        });

    // Peer event to accept incoming calls
        this.peer.on('call', (call) => {
          navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
          }).then((stream) => {
            this.lazyStream = stream;

            call.answer(stream);
            call.on('stream', (remoteStream) => {
              if (!this.peerList.includes(call.peer)) {
                this.streamRemoteVideo(remoteStream);
                this.currentPeer = call.peerConnection;
                this.peerList.push(call.peer);
              }
            });

          }).catch(err => {
            console.log(err + 'Unable to get media');
          });
        });
      }

      connectWithPeer(id: string): void {
        navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        }).then((stream) => {
          this.lazyStream = stream;

          const call = this.peer.call(id, stream);
          call.on('stream', (remoteStream) => {
            if (!this.peerList.includes(call.peer)) {
              this.streamRemoteVideo(remoteStream);
              this.currentPeer = call.peerConnection;
              this.peerList.push(call.peer);
            }
          });
        }).catch(err => {
          console.log(err + 'Unable to connect');
        });
      }

 screenShare() {
    // @ts-ignore
    navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: {
        echoCancellation: true,
        noiseSuppression: true
      }
    }).then(stream => {
      const videoTrack = stream.getVideoTracks()[0];
      videoTrack.onended = () => {
        this.stopScreenShare();
      };

      const sender = this.currentPeer.getSenders().find((s: any) => s.track.kind === videoTrack.kind);
      sender.replaceTrack(videoTrack);
    }).catch(err => {
      console.log('Unable to get display media ' + err);
    });
  }

  private stopScreenShare() {
    const videoTrack = this.lazyStream.getVideoTracks()[0];
    const sender = this.currentPeer.getSenders().find((s: any) => s.track.kind === videoTrack.kind);
    sender.replaceTrack(videoTrack);
  }

  private streamRemoteVideo(stream: any): void {
    const video = document.createElement('video');
    video.classList.add('video');
    video.srcObject = stream;
    video.play();

    document?.getElementById('remote-video')?.append(video);
  }*/

  ngOnInit() {


  }
PRE = "DELTA"
SUF = "MEET"
room_id: any = null;
// @ts-ignore
getUserMedia = navigator.getUserMedia || navigator?.webkitGetUserMedia || navigator?.mozGetUserMedia;
local_stream: any;
screenStream: any;
peer: any;
currentPeer = null
screenSharing = false
 createRoom() {
    console.log("Creating Room")
    // @ts-ignore
    let room = document.getElementById("room-input").value;
    if (room == " " || room == "") {
        alert("ingrese un numero de sala")
        return;
    }
    this.room_id = this.PRE + room + this.SUF;
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
        call.on('stream', (stream:any) => {
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
    this.room_id = this.PRE + room + this.SUF;
    this.hideModal()
    this.peer = new Peer()
    this.peer.on('open', (id: any) => {
        console.log("Connected with Id: " + id)
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
