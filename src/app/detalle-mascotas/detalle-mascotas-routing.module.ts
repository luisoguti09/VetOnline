import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMascotasPage } from './detalle-mascotas.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleMascotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMascotasPageRoutingModule {}
