import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Event, Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';

import { MitronPeer } from './video-models';
import { SignalingService, SignalMessage } from '../services/signaling.service';
import * as SimplePeer from 'simple-peer';




@Component({
  selector: 'app-veterinarios',
  templateUrl: './veterinarios.page.html',
  styleUrls: ['./veterinarios.page.scss'],
})
export class VeterinariosPage implements OnInit {
  simplePeer: any;
  veterinarios: any = [];
  vets: any = [];
  searchedvets: any;
  items: any = [];
  salaDeLlamadas!: string;
  mitronPeers: Array<MitronPeer> = new Array();

  @ViewChild('myVideo')
  myVideo!: ElementRef<HTMLVideoElement>;

  @ViewChildren('peerVideo')
  peerVideos!: QueryList<ElementRef<HTMLVideoElement>>;
  constructor(
    private vetServ: VeterinariosServiceService,
    private signalingService: SignalingService,
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
    this.simplePeer = new SimplePeer({
      initiator: true,
    });

    this.simplePeer.on("signal", (data: any) => {
      console.log(data)
    });

    this.getVeterinarios();

    this.searchedvets = this.vets;

    this.generateItems();

    this.salaDeLlamadas = this.actRt.snapshot.queryParams['salaDeLlamadas']

    navigator.mediaDevices.getUserMedia({ video: { width: 300, height: 300 }, audio: true })
      .then(stream => {

        this.myVideo.nativeElement.srcObject = stream
        this.myVideo.nativeElement.play()

        this.signalingService.connect()

        this.signalingService.onConnect(() => {

          console.log(`My Socket Id ${this.signalingService.socketId}`)

          this.signalingService.requestForJoiningRoom({ roomName: this.salaDeLlamadas })

          this.signalingService.onRoomParticipants(participants => {
            console.log(`${this.signalingService.socketId} - En Sala de Participantes`)
            console.log(participants)

            //this.signalingService.sendOfferSignal({ signalData: { type: 'offer', sdp: 'kldjfdfkgjdkjk' }, callerId: this.signalingService.socketId, calleeId: participants.find(id => id != this.signalingService.socketId) })
            this.initilizePeersAsCaller(participants, stream)
          })

          this.signalingService.onOffer(msg => {
            this.initilizePeersAsCallee(msg, stream)
          })

          this.signalingService.onAnswer(msg => {
            console.log(`${this.signalingService.socketId} - You got Answer from ${msg.calleeId}`)
            const mitronPeer = this.mitronPeers.find(mitronPeer => mitronPeer.peerId === msg.calleeId)
            mitronPeer!.peer.signal(msg.signalData)
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


getVeterinarios() {
  this.vetServ.mostrarVets().subscribe(res => {
    this.vets = res;
  });
}

searchVet(event: any) {
  const text = event.target.value;
  this.searchedvets = this.vets;
  if (text && text.trim() != '') {
    this.searchedvets = this.searchedvets.filter((vet: any) => {
      return (vet.name.toLowerCase().indexOf(text.toLowerCase()) > - 1);
    })
  }
}

  private generateItems() {
  const count = this.items.length + 1;
  for (let i = 0; i < 50; i++) {
    this.items.push(`Item ${count + i}`);
  }
}

cargandoInfo(ev: any) {
  this.generateItems();
  setTimeout(() => {
    (ev as InfiniteScrollCustomEvent).target.complete();
  }, 500);
}

comenzarComunicacion(){

}

  initilizePeersAsCaller(participants: Array<string>, stream: MediaStream) {
    const participantsExcludingMe = participants.filter(id => id != this.signalingService.socketId)
    participantsExcludingMe.forEach(peerId => {

      const peer: SimplePeer.Instance = new SimplePeer({
        initiator: true,
        trickle: false,
        stream
      })

      peer.on('signal', signal => {
        console.log(`${this.signalingService.socketId} Caller Block ${signal}`)
        this.signalingService.sendOfferSignal({ signalData: signal, callerId: this.signalingService.socketId, calleeId: peerId })
      })

      // peer.on('stream', stream => {
      //   this.peerVideos.first.nativeElement.srcObject = stream
      //   this.peerVideos.first.nativeElement.play()
      // })
      this.mitronPeers.push({ peerId: peerId, peer: peer })
    })
  }

  initilizePeersAsCallee(msg: SignalMessage, stream: MediaStream) {
    console.log(`${this.signalingService.socketId} You have an offer from ${msg.callerId}`)
    // this.signalingService.sendAnswerSignal({ signalData: msg.signalData, callerId: msg.callerId })

    const peer: SimplePeer.Instance = new SimplePeer({
      initiator: false,
      trickle: false,
      stream
    })

    peer.on('signal', (signal: any) => {
      console.log(`${this.signalingService.socketId} Callee Block ${signal}`)
      this.signalingService.sendAnswerSignal({ signalData: signal, callerId: msg.callerId })
    })

    peer.signal(msg.signalData)
    this.mitronPeers.push({ peerId: msg.callerId, peer: peer })
  } 


}

