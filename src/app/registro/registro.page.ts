import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoginServiceService } from '../services/login-service.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MyValidations } from './my-validations';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[MessageService]
})
export class RegistroPage implements OnInit {

  public form: FormGroup;
  public tipoUsuarios: any; 
  public regSuccess: boolean = false
  public passIdem: boolean = false;

  
  constructor(
    private fb: FormBuilder,
    private alert: AlertController,
    private logServ: LoginServiceService,
    private router : Router,
    private messageService: MessageService,
  ) { 
    this.form = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      apellido: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      edad: new FormControl(0, MyValidations.isYounger),
      tipoUsuario: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]),
      confirmPass: new FormControl('', [Validators.required]),
      tycs: new FormControl(null, [Validators.requiredTrue]),
    });
    
  }

test(){
  console.log(this.form);
}

  ngOnInit() {
    this.logServ.tipoUser().subscribe((res : any) =>{
      if (!!res) {
        this.tipoUsuarios = res.filter((tU : any)=>{
          return tU.descripcion != "administrador";
        })
      }     
    });
  }

guardar(){
  if (this.verificarPass()) {
    this.logServ.guardar(
      this.form?.get('nombre')?.value, 
      this.form?.get('apellido')?.value, 
      this.form?.get('edad')?.value,
      this.form?.get('email')?.value, 
      this.form?.get('pass')?.value,
      this.form?.get('confirmPass')?.value,
      this.form?.get('tycs')?.value,
      this.form?.get('tipoUsuario')?.value?.descripcion).subscribe(res=>{
        this.router.navigate(['login']);
      }) 
  }  
  }

  verificarPass(){
    if (this.form?.get('pass')?.value == this.form?.get('confirmPass')?.value ) {
      return true;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', 
      detail: 'Las constraseñas deben coincidir' });
      return false;
    }
  }

  loguedUser() {
    console.log(this.form?.get('email')?.value);
    this.logServ.loginSucc(
      this.form?.get('email')?.value, 
      this.form?.get('pass')?.value)
      .subscribe(res =>{
        this.logServ.loggedUser = res.data;
        if (res.success && res.data.tipoUsuario == 'usuario' ) {
         this.router.navigate(['dashboard']);
        } 
        if (res.success && res.data.tipoUsuario == 'veterinario') {
          this.router.navigate(['dashboard-veterinarios']);
        }
    });
  }
}
