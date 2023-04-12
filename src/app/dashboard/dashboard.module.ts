import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { VeterinariosPageModule } from '../veterinarios/veterinarios.module';
import { CallPageModule } from '../call/call.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    VeterinariosPageModule,
    CallPageModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
