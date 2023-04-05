import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MitronPeer } from '../veterinarios/video-models';
import * as SimplePeer from 'simple-peer';
import { SignalingService, SignalMessage } from '../services/signaling.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.page.html',
  styleUrls: ['./videocall.page.scss'],
})
export class VideocallPage implements OnInit {

  simplePeer: any;
  salaDeLlamadas!: string;
  mitronPeers: Array<MitronPeer> = new Array();

  @ViewChild('myVideo')
  myVideo!: ElementRef<HTMLVideoElement>;

  @ViewChildren('peerVideo')
  peerVideos!: QueryList<ElementRef<HTMLVideoElement>>;

  constructor(
    private signalingService: SignalingService,
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {

    this.simplePeer = new SimplePeer({
      initiator: true,
    });

    this.simplePeer.on("signal", (data: any) => {
      console.log(data);
    });

    this.salaDeLlamadas = this.actRt.snapshot.queryParams['salaDeLlamadas']

    navigator.mediaDevices.getUserMedia({ video: { width: 300, height: 300 }, audio: true })
      .then(stream => {

        this.myVideo.nativeElement.srcObject = stream
        this.myVideo.nativeElement.play()

        this.signalingService.connect()

        this.signalingService.onConnect(() => {

         

          this.signalingService.requestForJoiningRoom({ roomName: this.salaDeLlamadas })

          this.signalingService.onRoomParticipants(participants => {
           
            console.log(participants)

            //this.signalingService.sendOfferSignal({ signalData: { type: 'offer', sdp: 'kldjfdfkgjdkjk' }, callerId: this.signalingService.socketId, calleeId: participants.find(id => id != this.signalingService.socketId) })
            this.initilizePeersAsCaller(participants, stream)
          })

          this.signalingService.onOffer(msg => {
            this.initilizePeersAsCallee(msg, stream)
          })

          this.signalingService.onAnswer(msg => {
           
            const mitronPeer = this.mitronPeers.find(mitronPeer => mitronPeer.peerId === msg.calleeId)
            mitronPeer!.peer.signal("");
          })

          this.signalingService.onRoomLeft(socketId => {
            this.mitronPeers = this.mitronPeers.filter(mitronPeer => socketId != mitronPeer.peerId)
          })
        })
      })
      .catch(err => {
        console.log(err)
      });
  }

  initilizePeersAsCaller(participants: Array<string>, stream: MediaStream) {
    const participantsExcludingMe = participants;
    participantsExcludingMe.forEach(peerId => {

      const peer: SimplePeer.Instance = new SimplePeer({
        initiator: true,
        trickle: false,
        stream
      });

      peer.on('signal', signal => { 
       // this.signalingService.sendOfferSignal({ signalData: signal, callerId: this.signalingService.socketId, calleeId: peerId })
      });

      // peer.on('stream', stream => {
      //   this.peerVideos.first.nativeElement.srcObject = stream
      //   this.peerVideos.first.nativeElement.play()
      // })
      this.mitronPeers.push({ peerId: peerId, peer: peer })
    });
  }

  initilizePeersAsCallee(msg: SignalMessage, stream: MediaStream) {
    
    // this.signalingService.sendAnswerSignal({ signalData: msg.signalData, callerId: msg.callerId })

    const peer: SimplePeer.Instance = new SimplePeer({
      initiator: false,
      trickle: false,
      stream
    })

    peer.on('signal', (signal: any) => {
      
      this.signalingService.sendAnswerSignal({ signalData: signal, callerId: msg.callerId })
    })

    peer.signal("")
    this.mitronPeers.push({ peerId: "", peer: peer })
  } 


}
