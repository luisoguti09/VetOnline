import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { VeterinariosPageModule } from '../veterinarios/veterinarios.module';
import { CallPageModule } from '../call/call.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VeterinariosPageRoutingModule } from '../veterinarios/veterinarios-routing.module';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    VeterinariosPageRoutingModule,
    CallPageModule,
    VeterinariosPageModule,
    ButtonModule
  ],
  declarations: [DashboardPage],
})
export class DashboardPageModule {}
