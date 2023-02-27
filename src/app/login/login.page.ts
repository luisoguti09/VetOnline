import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {
  form!: FormGroup;
  fomrs = new FormControl('');

  constructor(
    private logServ : LoginServiceService ,
    private fb: FormBuilder
  ) {
    
  }

  ngOnInit() {
    this.form = this.fb.group({
      usuario: [null, Validators.required],
      password: [null, Validators.required]
  });
  }

  loguedUser(){
    console.log(this.form?.get('usuario')?.value);
    
  }

}
