import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  items: MenuItem[] = [];

  activeIndex: number = 0;

  constructor(
    public messageService: MessageService
  ) { }

  onActiveIndexChange(event: any) {
    this.activeIndex = event;
  }

  ngOnInit() {
    this.items = [
      {
          label: 'Datos Personales',
          command: (event: any) => this.messageService.add({severity:'info', summary:'Primer Paso', detail: event.item.label})
      },
      {
          label: 'Seat',
          command: (event: any) => this.messageService.add({severity:'info', summary:'Segundo Paso', detail: event.item.label})
      },
      {
          label: 'Payment',
          command: (event: any) => this.messageService.add({severity:'info', summary:'Tercer Paso', detail: event.item.label})
      },
      {
          label: 'Confirmacion',
          command: (event: any) => this.messageService.add({severity:'info', summary:'Ultimo Paso', detail: event.item.label})
      }
    ];
  }

}
