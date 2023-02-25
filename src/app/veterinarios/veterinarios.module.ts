import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinariosPageRoutingModule } from './veterinarios-routing.module';

import { VeterinariosPage } from './veterinarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinariosPageRoutingModule
  ],
  declarations: [VeterinariosPage]
})
export class VeterinariosPageModule {}
