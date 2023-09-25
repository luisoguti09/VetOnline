import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { IonicModule } from '@ionic/angular';

import { DetalleMascotasPageRoutingModule } from './detalle-mascotas-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { DetalleMascotasPage } from './detalle-mascotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleMascotasPageRoutingModule,
    ReactiveFormsModule,
    MessagesModule,
    CalendarModule
  ],
  declarations: [DetalleMascotasPage]
})
export class DetalleMascotasPageModule {}
