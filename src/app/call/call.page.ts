import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxAgoraSdkNgService } from 'ngx-agora-sdk-ng';
import { Peer } from "peerjs";

@Component({
  selector: 'app-call',
  templateUrl: './call.page.html',
  styleUrls: ['./call.page.scss'],
})
export class CallPage implements OnInit {
  @ViewChild('localVideo') localVideo: any;
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
  }
}
