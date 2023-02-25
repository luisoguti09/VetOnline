import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeterinariosPage } from './veterinarios.page';

const routes: Routes = [
  {
    path: '',
    component: VeterinariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinariosPageRoutingModule {}
