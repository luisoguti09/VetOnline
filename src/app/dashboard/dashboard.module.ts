import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardComponentRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { VeterinariosPage } from '../veterinarios/veterinarios.page';
import { VeterinariosPageModule } from '../veterinarios/veterinarios.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VeterinariosPageModule,
    VeterinariosPage,
    DashboardComponentRoutingModule,
    DashboardComponent
  ],
  declarations: [DashboardComponent]
})
export class LoginPageModule {}