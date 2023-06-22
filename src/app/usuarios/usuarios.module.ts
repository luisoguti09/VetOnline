import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UsuariosPageRoutingModule } from './usuarios-routing.module';
import { UsuariosPage } from './usuarios.page';
import { PanelModule } from 'primeng/panel';
import { StepsModule } from 'primeng/steps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UsuariosPageRoutingModule,
    PanelModule,
    StepsModule
  ],
  declarations: [
    UsuariosPage
  ]
})
export class UsuariosPageModule {}
