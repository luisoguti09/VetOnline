import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardVeterinariosPage } from './dashboard-veterinarios.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardVeterinariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardVeterinariosPageRoutingModule {}
