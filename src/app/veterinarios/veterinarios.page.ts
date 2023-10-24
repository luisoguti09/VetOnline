import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';
import { CallService } from '../services/call.service';




@Component({
  selector: 'app-veterinarios',
  templateUrl: './veterinarios.page.html',
  styleUrls: ['./veterinarios.page.scss'],
})
export class VeterinariosPage implements OnInit {

  public veterinarios: any = [];
  public vets: any = [];
  public searchedvets: any;
  public items: any = [];
  public showCall = false;
  public associated! : any;
  constructor(
    private vetServ: VeterinariosServiceService,
    private callServ: CallService
  ) { }

  ngOnInit() {

    this.getVeterinarios();
    this.searchedvets = this.vets;
    this.generateItems();
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
      });
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

  comenzarComunicacion() {
    this.showCall = true;
  }
  canDismiss() { }
  presentingElement() { }



  goToDatVet(vet: any) {
    console.log(vet);
    this.vetServ.setSelectedVet(vet);
    this.callServ.createRoom();
  }
}

