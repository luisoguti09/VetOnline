import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuariosPageRoutingModule } from './usuarios-routing.module';
import { UsuariosPage } from './usuarios.page';
import { PanelModule } from 'primeng/panel';
import { StepsModule } from 'primeng/steps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosPageRoutingModule,
    PanelModule,
    StepsModule
  ],
  declarations: [UsuariosPage]
})
export class UsuariosPageModule {}
