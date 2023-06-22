import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { MenuItem, MessageService } from 'primeng/api';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';


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
  public status: string = "off";

  constructor(
    private messageService: MessageService,
    private fb: FormBuilder,
    private vetServ: VeterinariosServiceService,
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

  changeStatus(estado: string, tipoConsulta: string){
    this.vetServ.changeStatus(estado, tipoConsulta).subscribe((res: any) =>{
      this.status = res.status;
      if(this.status === "on") {
        this.showOn();
      }else{
        this.showOff;
      }
    })
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
