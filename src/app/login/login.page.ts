import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

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
  error: any;
  visible: boolean = false;
  eresVet: boolean= false;

  constructor(
    private logServ: LoginServiceService,
    private fb: FormBuilder,
    private router : Router,
    private messageService: MessageService,
  ) { }
  ngOnInit() { }
  
  loguedUser() {
    console.log(this.form?.get('email')?.value);
    
    this.logServ.loginSucc(
      this.form?.get('email')?.value , 
      this.form?.get('pass')?.value)
      .subscribe(res =>{
        if (res.success && this.eresVet == false ) {
         this.router.navigate(['dashboard']);
        } else {
          this.error="e";
          this.visible = true;
          this.showError();
        } 
        if (res.success && this.eresVet) {
          this.router.navigate(['dashboard-veterinarios'])
        }
    });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Complete todos los campos' });
  }

}
