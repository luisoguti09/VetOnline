import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinariosPageRoutingModule } from './veterinarios-routing.module';

import { VeterinariosPage } from './veterinarios.page';
import { CallPageModule } from '../call/call.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinariosPageRoutingModule,
    CallPageModule
  ],
  declarations: [
    VeterinariosPage],
  exports:[
    VeterinariosPage
  ]
})
export class VeterinariosPageModule {}
