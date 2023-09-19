import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: 'veterinarios',
    loadChildren: () => import('./veterinarios/veterinarios.module').then(m => m.VeterinariosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'videocall',
    loadChildren: () => import('./videocall/videocall.module').then(m => m.VideocallPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'call',
    loadChildren: () => import('./call/call.module').then(m => m.CallPageModule)
  },
  {

    path: 'dashboard-veterinarios',
    loadChildren: () => import('./dashboard-veterinarios/dashboard-veterinarios.module').then(m => m.DashboardVeterinariosPageModule)
  },
  {
    path: 'data-veterinario',
    loadChildren: () => import('./data-veterinario/data-veterinario.module').then(m => m.DataVeterinarioPageModule)
  },
  {
    path: 'tycs',
    loadChildren: () => import('./tycs/tycs.module').then(m => m.TycsPageModule)
  },  {
    path: 'mascotas',
    loadChildren: () => import('./mascotas/mascotas.module').then( m => m.MascotasPageModule)
  },
  {
    path: 'detalle-mascotas',
    loadChildren: () => import('./detalle-mascotas/detalle-mascotas.module').then( m => m.DetalleMascotasPageModule)
  },

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
