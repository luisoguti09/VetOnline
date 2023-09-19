import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DataVeterinarioPageRoutingModule } from './data-veterinario-routing.module';
import { DataVeterinarioPage } from './data-veterinario.page';
import { CallPage } from '../call/call.page';
import { CallPageModule } from '../call/call.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataVeterinarioPageRoutingModule,
    CallPageModule,
    DialogModule,
    DynamicDialogModule,
    TableModule
    
  ],
  declarations: [DataVeterinarioPage]
})
export class DataVeterinarioPageModule {}
