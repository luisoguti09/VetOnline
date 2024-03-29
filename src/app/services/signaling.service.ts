import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignalData } from 'simple-peer';
import { CallPage } from '../call/call.page';


@Injectable({
  providedIn: 'root'
})
export class SignalingService {

  public url = 'https://vetonline.cu.ma';
  public httpOptions: any;

  //get socketId() {
   
  //}

  constructor(
    private httpClient: HttpClient,
    private call : CallPage,
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
   }

  connect() {
  }

  private listen(channel: string, fn: Function) {
    
  }

  private send(chanel: string, message: SignalMessage) {
    
  }

  onConnect(fn: () => void) {
    this.listen('connect', fn)
  }

  requestForJoiningRoom(msg: SignalMessage) {
    this.send('room_join_request', msg)
  }

  onRoomParticipants(fn: (participants: Array<string>) => void) {
    this.listen('room_users', fn)
  }

  sendOfferSignal(msg: SignalMessage) {
    this.send('offer_signal', msg)
  }

  onOffer(fn: (msg: SignalMessage) => void) {
    this.listen('offer', fn)
  }

  sendAnswerSignal(msg: SignalMessage) {
    this.send('answer_signal', msg)
  } 

  onAnswer(fn: (msg: SignalMessage) => void) {
    this.listen('answer', fn)
  }

  onRoomLeft(fn: (socketId: string) => void) {
    this.listen('room_left', fn)
  }
}

export interface SignalMessage {
  callerId?: string
  calleeId?: string,
  signalData?: SignalData,
  msg?: string,
  roomName?: string
}
