import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../services/mascotas.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.page.html',
  styleUrls: ['./mascotas.page.scss'],
  providers: [MessageService]
})
export class MascotasPage implements OnInit {

  public mascotas: any;
  public items!: MenuItem[];


  constructor(
    private petServ: MascotasService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.mostrarPets();
    this.items = [
      {
        label: 'Nueva mascota',
        icon: PrimeIcons.PLUS,
      }
    ];
  }

mostrarPets() {
  this.petServ.mostrarPets().subscribe((res: any) => {
    this.mascotas = res;
    console.log(this.mascotas);
  })
}

sumarPet(){
  
}
}
