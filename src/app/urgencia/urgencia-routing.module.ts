import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrgenciaPage } from './urgencia.page';

const routes: Routes = [
  {
    path: '',
    component: UrgenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrgenciaPageRoutingModule {}
