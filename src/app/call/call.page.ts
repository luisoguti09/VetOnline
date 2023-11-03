import { Component, OnInit } from '@angular/core';
import { CallService } from '../services/call.service';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.page.html',
  styleUrls: ['./call.page.scss'],
  providers:[CallService]
})
export class CallPage implements OnInit {

  public tipoUser: any;
  public tipoId: any;
  constructor(
    private callServ: CallService
  ) {

  }
  ngOnInit() {
  }
  room_id: any = null;
  // @ts-ignore
  getUserMedia = (navigator.getUserMedia || navigator?.webkitGetUserMedia || navigator?.mozGetUserMedia)
  .bind(navigator);
  local_stream: any;
  screenStream: any;
  peer: any;
  currentPeer = null
  screenSharing = false 

  createRoom() {
    this.callServ.createRoom();
  }

  notify(msg: any) {
    this.callServ.notify(msg);
  }

  joinRoom() {
    this.callServ.joinRoom();
  }

  startScreenShare() {
   this.callServ.startScreenShare();
  }

  stopScreenSharing() {
    this.callServ.stopScreenSharing();
  }
}
