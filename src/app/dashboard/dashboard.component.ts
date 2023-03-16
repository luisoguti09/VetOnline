import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoginServiceService } from '../services/login-service.service';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public form: FormGroup;
  public veterinarios: any;

  constructor(
    private logServ: LoginServiceService,
    private fb: FormBuilder,
    private vetServ: VeterinariosServiceService
  ) { 
    this.form = this.fb.group({
      fomrs: new FormControl('', [Validators.required]),
      
    })
  }

  public appPages = [
    { title: 'Veterinarios', url: '/veterinarios', icon: 'medkit' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Usuarios', url: '/usuarios', icon: 'people' },
  ];
  public labels = ['Consejos', 'Tinder de Mascotas', 'Notas', 'Tabla de Alimentacion', 'Querés viajar?', 'Recordatorios'];

  ngOnInit() {
    this.vetServ.mostrarVets().subscribe(res=>{
      this.veterinarios = res;  
    })
  }

  shareApp(){
    
  }

}
