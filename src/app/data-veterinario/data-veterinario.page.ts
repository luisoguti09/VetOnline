import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CallService } from '../services/call.service';

@Component({
  selector: 'app-data-veterinario',
  templateUrl: './data-veterinario.page.html',
  styleUrls: ['./data-veterinario.page.scss'],
  providers: [DialogService, MessageService]
})
export class DataVeterinarioPage implements OnDestroy {

  public mostrarHistory: boolean = false;
  public historialMascotas: any;
  public visible: boolean = false;
  public message: string = 'Esperando a iniciar la consulta';
  public name!: string;
  public ref: DynamicDialogRef | undefined;

  constructor(
    private vetServ: VeterinariosServiceService,
    public dialogService: DialogService,
    public messageService: MessageService,
    private callSrv: CallService,
  ) { 

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

  @ViewChild(IonModal) modal!: IonModal;
  showDialog() {
    this.visible = true;
  }

  cancel() {
    this.modal.dismiss(null, 'Cancelar');
  }

  confirm() {
    this.modal.dismiss(this.name, 'Confirmar');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'Confirmar') {
      this.message = `Video Llamada Iniciada, ${ev.detail.data}!`;
    }
  }

  buscarHistorial(id: number) {
    this.vetServ.consultarHistorial(1).subscribe(res => {
      this.historialMascotas = res;
      this.visible = true;
    })
  }

  show() {
    this.ref = this.dialogService.open(this.historialMascotas, {
      header: 'Ver Historial',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
  }

  

}
