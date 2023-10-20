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
import { UrgenciaPageModule } from '../urgencia/urgencia.module';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';
import { CallService } from '../services/call.service';


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
    ButtonModule,
    UrgenciaPageModule,
    CallPageModule
  ],
  declarations: [DashboardPage],
  providers:[
    CallService
  ],
  exports:[
    DashboardPage
  ]
})
export class DashboardPageModule {}
