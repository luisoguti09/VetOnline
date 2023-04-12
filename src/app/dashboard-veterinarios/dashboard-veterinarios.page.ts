import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-dashboard-veterinarios',
  templateUrl: './dashboard-veterinarios.page.html',
  styleUrls: ['./dashboard-veterinarios.page.scss'],
  providers: [MessageService]
})
export class DashboardVeterinariosPage implements OnInit {

  public items: MenuItem[] = [];
  public formGroup!: FormGroup;
  public visible: boolean = false;

  constructor(
    private messageService: MessageService,
    private fb: FormBuilder,
  ) {
    this.formGroup = fb.group({
      status:[null]
    })
  }

  stateOptions: any[] = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' }
  ];

  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl('on')
    });
  }

  showMessages(){
    if (this.formGroup.get('status')?.value == 'on') {
      this.showOn();
    } else {
      this.showOff();
    }
  }

  showOff() {
    this.messageService.add({ severity: 'off', summary: 'Off', detail: 'Desconectado' });
  }
  showOn() {
    this.messageService.add({ severity: 'on', summary: 'On', detail: 'Conectado y listo para recibir llamadas' });
  }



}
