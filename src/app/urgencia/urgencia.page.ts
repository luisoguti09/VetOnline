import { Component, OnInit } from '@angular/core';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';
import { eq, first } from "lodash";

@Component({
  selector: 'app-urgencia',
  templateUrl: './urgencia.page.html',
  styleUrls: ['./urgencia.page.scss'],
})
export class UrgenciaPage implements OnInit {

  constructor(
    private vetServ: VeterinariosServiceService,

  ) { }

  ngOnInit() {
  }
  
  iniciaUrgencia(){
    let urgVet;
   this.vetServ.urgencia().subscribe((res:any)=>{  
       urgVet = res.filter((res: any)=>{
        return eq(res.atiende_urg, 'si') && eq(res.status, 'on');
      });
      console.log(first(urgVet));
    });
    
  }

}
