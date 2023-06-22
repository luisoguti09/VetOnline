import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CallPageRoutingModule } from './call-routing.module';
import { CallPage } from './call.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CallPage],
  exports: [CallPage]
})
export class CallPageModule {}
