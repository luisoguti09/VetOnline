import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Event, Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';

@Component({
  selector: 'app-veterinarios',
  templateUrl: './veterinarios.page.html',
  styleUrls: ['./veterinarios.page.scss'],
})
export class VeterinariosPage implements OnInit {

  veterinarios: any = [];
  vets: any = [];
  searchedvets: any;
  items: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private vetServ: VeterinariosServiceService,
  ) { }

  ngOnInit() {

    this.getVeterinarios();
    
    this.searchedvets = this.vets;

    this.generateItems();

  }

  getVeterinarios() {
    this.vetServ.mostrarVets().subscribe(res =>{
      this.vets = res
    });
      
  }

  searchVet(event: any) {
    const text = event.target.value;
    this.searchedvets = this.vets;
    if (text && text.trim() != '') {
      this.searchedvets = this.searchedvets.filter((vet: any)=> {
        return (vet.name.toLowerCase().indexOf(text.toLowerCase()) >- 1);
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


}

