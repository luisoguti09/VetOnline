import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { LoginServiceService } from '../services/login-service.service';
import { VeterinariosServiceService } from '../services/veterinarios-service.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FirebasexService } from '../services/firebasex.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPage implements OnInit {

  public form: FormGroup;
  public veterinarios: any;
  public items: any = [];
  public associated! : any;
  public tipoConsulta: any;
  
  constructor(
    private logServ: LoginServiceService,
    private fb: FormBuilder,
    private vetServ: VeterinariosServiceService,
    private fireserv: FirebasexService,
    private router: Router,
  ) { 
    this.form = this.fb.group({
      fomrs: new FormControl('', [Validators.required]), 
    })
  }

  public appPages = [
    { title: 'Veterinarios', url: '/veterinarios', icon: 'medkit' },
    { title: 'Mascotas', url: '/mascotas', icon: 'paw' },
    { title: 'Logout', url: '/logout', icon: 'log-out' },
    { title: 'URGENCIA', url: '/urgencia', icon: 'bell' },
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

// atenderTipoCons(){
//   this.vetServ.recibirCons().subscribe(res=>{
//     this.tipoConsulta = res;
//   })
// }

test(){
  this.fireserv.test();
}
goToDatVet() {
  this.vetServ.setSelectedVet(this.associated);
  this.router.navigate(['/data-veterinario']);
}

}