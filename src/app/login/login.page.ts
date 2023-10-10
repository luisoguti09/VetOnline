import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers:[MessageService]

})
export class LoginPage implements OnInit {
  
  public form = new FormGroup({
    fomrs: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required]),
    
  });
  public error: any;
  public visible: boolean = false;
  public id_user!: number;
  public id_vet!: number;
  public user: boolean = false;
  public vet: boolean = false;

  constructor(
    private logServ: LoginServiceService,
    private fb: FormBuilder,
    private router : Router,
    private messageService: MessageService,
  ) { }
  ngOnInit() { }
  //loguear y redigir al usuario o veterinario
  loguedUser() {
    console.log(this.form?.get('email')?.value);
    this.logServ.loginSucc(
      this.form?.get('email')?.value, 
      this.form?.get('pass')?.value)
      .subscribe(res =>{
        this.logServ.loggedUser = res.data;
        if (res.success && res.data.tipoUsuario == 'usuario' ) {
         this.router.navigate(['dashboard']);
         this.user= true;
        } 
        if (res.success && res.data.tipoUsuario == 'veterinario') {
          this.router.navigate(['dashboard-veterinarios']);
          this.vet= true
        }
    });
  }

  tipoUser(){
    if (this.user) {
      this.logServ.loggedUser.id = this.id_user;
    }
    if (this.vet) {
      this.logServ.loggedUser.id = this.id_vet;
    }
  }
  
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Complete todos los campos' });
  }

}
