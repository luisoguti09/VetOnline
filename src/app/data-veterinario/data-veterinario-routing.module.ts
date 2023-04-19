import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataVeterinarioPage } from './data-veterinario.page';

const routes: Routes = [
  {
    path: '',
    component: DataVeterinarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataVeterinarioPageRoutingModule {}
