import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { VideocallPageRoutingModule } from './videocall-routing.module';
import { VideocallPage } from './videocall.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VideocallPageRoutingModule
  ],
  declarations: [VideocallPage]
})
export class VideocallPageModule {}
