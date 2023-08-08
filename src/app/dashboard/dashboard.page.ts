import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { LoginServiceService } from '../services/login-service.service';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuariosPage } from '../usuarios/usuarios.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public form: FormGroup;
  public veterinarios: any;
  public items: any = [];
  public associated! : any;
  
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
    { title: 'Usuarios', url: '/usuarios', icon: 'people' },
    { title: 'Logout', url: '/logout', icon: 'log-out' },
  ];
  public labels = ['Consejos', 'Tinder de Mascotas', 'Notas', 'Tabla de Alimentacion', 'Querés viajar?', 'Recordatorios'];

  ngOnInit() {
   this.mostrarVets();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  cargandoInfo(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

showAsoc(){
  let loggedUser: any = this.logServ.loggedUser;
  

if( !!loggedUser?.vetAsocId && loggedUser.vetAsocId != 0) {
  if(!!this.veterinarios && this.veterinarios.length >0){
    this.associated = this.veterinarios?.find((vet: any) => vet.id === loggedUser.vetAsocId);
    console.log(this.associated);
   return this.associated?.status === 'on' ? true :  false;
  }
  
}
return false;
}

mostrarVets(){
    this.vetServ.mostrarVets().subscribe(res=>{
      this.veterinarios = res;  
      console.log(this.veterinarios);
    })
  
}
}