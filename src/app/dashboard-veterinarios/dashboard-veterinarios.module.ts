import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardVeterinariosPageRoutingModule } from './dashboard-veterinarios-routing.module';

import { DashboardVeterinariosPage } from './dashboard-veterinarios.page';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { SpeedDialModule } from 'primeng/speeddial';
import { CallPage } from '../call/call.page';
import { CallPageModule } from '../call/call.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DashboardVeterinariosPageRoutingModule,
    MessagesModule,
    ToastModule,
    SpeedDialModule,
    CallPageModule
    
  ],
  declarations: [DashboardVeterinariosPage]
})
export class DashboardVeterinariosPageModule {}
