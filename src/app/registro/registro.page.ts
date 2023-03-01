import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public form: FormGroup

  constructor(
    private fb: FormBuilder,
  ) { 
    this.form = this.fb.group({
      fomrs: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required]),
      confirmPass: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  guardar(){
    var f = this.form.value;
    if (this.form.value.invalid
      ) {
      
    }
  }

}
