import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {
  
  public form = new FormGroup({
    fomrs: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
  });

  constructor(
    private logServ: LoginServiceService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    
  }

  loguedUser() {
    console.log(this.form?.get('usuario')?.value);

  }

}
