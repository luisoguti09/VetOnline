import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoginServiceService } from '../services/login-service.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  
})
export class RegistroPage implements OnInit {

  public form: FormGroup;
  public tipoUsuarios: any; 
  
  constructor(
    private fb: FormBuilder,
    private alert: AlertController,
    private logServ: LoginServiceService,
  ) { 
    this.form = this.fb.group({
      fomrs: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      tipoUsuario: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required]),
      confirmPass: new FormControl('', [Validators.required]),
    });
    
  }



  ngOnInit() {
    this.logServ.tipoUser().subscribe(res =>{
      this.tipoUsuarios = res;
    });
  }

guardar(){
   this.logServ.guardar(
    this.form?.get('nombre')?.value, 
    this.form?.get('apellido')?.value, 
    this.form?.get('email')?.value, 
    this.form?.get('pass')?.value,
    this.form?.get('tipoUsuario')?.value?.descripcion).subscribe(
      res => console.log(res),
      error => console.log(error)      
    );
  }
}
