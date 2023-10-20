import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { VeterinariosPageRoutingModule } from './veterinarios-routing.module';
import { VeterinariosPage } from './veterinarios.page';
import { CallPageModule } from '../call/call.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinariosPageRoutingModule,
    CallPageModule,
    ReactiveFormsModule
  ],
  declarations: [
    VeterinariosPage],
  exports:[
    VeterinariosPage
  ],
  providers:[
    VeterinariosServiceService
  ]
})
export class VeterinariosPageModule {}
