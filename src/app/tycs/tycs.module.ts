import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TycsPageRoutingModule } from './tycs-routing.module';

import { TycsPage } from './tycs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TycsPageRoutingModule
  ],
  declarations: [TycsPage]
})
export class TycsPageModule {}
