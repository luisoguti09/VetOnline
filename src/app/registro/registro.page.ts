import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public form: FormGroup
  
  constructor(
    private fb: FormBuilder,
    private alert: AlertController,
  ) { 
    this.form = this.fb.group({
      fomrs: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      matriVet: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required]),
      confirmPass: new FormControl('', [Validators.required]),
    });
    
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.form.value;
    if (this.form.value.invalid
      ) {
        const alert = await this.alert.create({
          header: 'Datos incompletos',
          message: 'Tenes que llenar los campos requeridos!',
          buttons: ['Aceptar'],
        });
    
        await alert.present();
        return;
    }
    var usuario = {
      nombre: f.nombre,
      apellido: f.apellido,
      matriVet: f.matriVet,
      email: f.email,
      pass: f.pass,
    }
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
    
  

}
