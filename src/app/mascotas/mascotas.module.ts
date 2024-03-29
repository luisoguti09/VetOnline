import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MascotasPageRoutingModule } from './mascotas-routing.module';
import { MascotasPage } from './mascotas.page';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascotasPageRoutingModule,
    TableModule,
    ButtonModule,
    MessagesModule
  ],
  declarations: [MascotasPage]
})
export class MascotasPageModule {}
