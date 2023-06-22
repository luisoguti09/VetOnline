import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DataVeterinarioPageRoutingModule } from './data-veterinario-routing.module';
import { DataVeterinarioPage } from './data-veterinario.page';
import { CallPage } from '../call/call.page';
import { CallPageModule } from '../call/call.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataVeterinarioPageRoutingModule,
    CallPageModule,

  ],
  declarations: [DataVeterinarioPage]
})
export class DataVeterinarioPageModule {}
