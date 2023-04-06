import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-dashboard-veterinarios',
  templateUrl: './dashboard-veterinarios.page.html',
  styleUrls: ['./dashboard-veterinarios.page.scss'],
  providers: [MessageService]
})
export class DashboardVeterinariosPage implements OnInit {

  items: MenuItem[] = [];

  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.items = [
      {
          icon: 'pi pi-check',
          command: () => {
              this.messageService.add({ severity: 'info', summary: 'Act', detail: 'Activado!' });
          }
      },
      {
          icon: 'pi pi-times',
          command: () => {
              this.messageService.add({ severity: 'success', summary: 'Desact', detail: 'Desactivado!' });
          }
      }
    ]
  }

}
