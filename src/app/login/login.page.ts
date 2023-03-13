import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {
  
  public form = new FormGroup({
    fomrs: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required]),
  });

  constructor(
    private logServ: LoginServiceService,
    private fb: FormBuilder,
    private router : Router
  ) { }
  ngOnInit() { }

  loguedUser() {
    console.log(this.form?.get('email')?.value);
    
    this.logServ.loginSucc(
      this.form?.get('email')?.value , 
      this.form?.get('pass')?.value)
      .subscribe(res =>{
        if (res.success  ) {
         this.router.navigate(['dashboard']);
        } else {
          console.log("te equivocaste perrito");
      }
    });
  }
}
