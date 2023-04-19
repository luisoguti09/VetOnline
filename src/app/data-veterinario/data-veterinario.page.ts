import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-data-veterinario',
  templateUrl: './data-veterinario.page.html',
  styleUrls: ['./data-veterinario.page.scss'],
})
export class DataVeterinarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(IonModal) modal!: IonModal;

  public message: string = 'Esperando a iniciar la consulta';
  public name!: string;

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

}
