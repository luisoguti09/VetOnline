import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public appPages = [
    { title: 'Veterinarios', url: '/veterinarios', icon: 'medkit' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Usuarios', url: '/usuarios', icon: 'people' },
  ];
  public labels = ['Consejos', 'Tinder de Mascotas', 'Notas', 'Tabla de Alimentacion', 'Querés viajar?', 'Recordatorios'];

  ngOnInit() {}

  shareApp(){
    
  }

}
