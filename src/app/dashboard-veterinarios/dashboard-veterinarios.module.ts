import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardVeterinariosPageRoutingModule } from './dashboard-veterinarios-routing.module';

import { DashboardVeterinariosPage } from './dashboard-veterinarios.page';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { SpeedDialModule } from 'primeng/speeddial';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardVeterinariosPageRoutingModule,
    MessagesModule,
    ToastModule,
    SpeedDialModule
  ],
  declarations: [DashboardVeterinariosPage]
})
export class DashboardVeterinariosPageModule {}
