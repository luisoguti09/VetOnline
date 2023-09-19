import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleMascotasPageRoutingModule } from './detalle-mascotas-routing.module';

import { DetalleMascotasPage } from './detalle-mascotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleMascotasPageRoutingModule
  ],
  declarations: [DetalleMascotasPage]
})
export class DetalleMascotasPageModule {}
