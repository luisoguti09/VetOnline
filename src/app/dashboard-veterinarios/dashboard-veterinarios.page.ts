import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { MenuItem, MessageService } from 'primeng/api';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-dashboard-veterinarios',
  templateUrl: './dashboard-veterinarios.page.html',
  styleUrls: ['./dashboard-veterinarios.page.scss'],
  providers: [MessageService]
})
export class DashboardVeterinariosPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  public items: MenuItem[] = [];
  public formGroup!: FormGroup;
  public visible: boolean = false;
  public unirse = false;
  public name!: string;
  public message: string = 'Esperando por una consulta';
  public id: string = '23'

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
    this.messageService.add({ severity: 'off', summary: 'A descansar', detail: 'Desconectado' });
  }
  showOn() {
    this.messageService.add({ severity: 'on', summary: 'Video Llamadas', detail: 'Conectado y listo para recibir llamadas' });
  }

  iniciarLlamada() {
    this.unirse = true;
  }

  notificacionPush(){

  }

  

  


  

  cancel() {
    this.modal.dismiss(null, 'cancelar');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirmar');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirmar') {
      this.message = `Hola, ${ev.detail.data}!`;
    }
  }

}
