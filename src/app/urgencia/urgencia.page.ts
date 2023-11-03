import { Component, OnInit } from '@angular/core';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';
import { eq, first } from "lodash";
import { CallService } from '../services/call.service';

@Component({
  selector: 'app-urgencia',
  templateUrl: './urgencia.page.html',
  styleUrls: ['./urgencia.page.scss'],
})
export class UrgenciaPage implements OnInit {

  public urgVet: any;

  constructor(
    private vetServ: VeterinariosServiceService,
    private callServ: CallService,
  ) { }

  ngOnInit() {
  }
  
  iniciaUrgencia(){
   this.vetServ.urgencia().subscribe((res:any)=>{  
       this.urgVet = res.filter((res: any)=>{
        return eq(res.atiende_urg, 'si') && eq(res.status, 'on');
      });
      console.log(first(this.urgVet));
    });
  }

  goToDatVet() {
    console.log(this.urgVet);
    this.vetServ.setSelectedVet(this.urgVet);
    this.callServ.createRoom();
  }
}
