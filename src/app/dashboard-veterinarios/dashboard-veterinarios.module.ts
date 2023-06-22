import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashboardVeterinariosPageRoutingModule } from './dashboard-veterinarios-routing.module';
import { DashboardVeterinariosPage } from './dashboard-veterinarios.page';
import { MessagesModule } from 'primeng/messages';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CallPageRoutingModule } from '../call/call-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardVeterinariosPageRoutingModule,
    MessagesModule,
    ToastModule,
    SpeedDialModule, 
    CallPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardVeterinariosPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DashboardVeterinariosPageModule {}
