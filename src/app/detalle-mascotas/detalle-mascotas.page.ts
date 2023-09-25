import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MascotasService } from '../services/mascotas.service';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-detalle-mascotas',
  templateUrl: './detalle-mascotas.page.html',
  styleUrls: ['./detalle-mascotas.page.scss'],
  providers: [MessageService]
})
export class DetalleMascotasPage implements OnInit {

  public form: FormGroup;

  constructor(
    private petServ: MascotasService,
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private logServ: LoginServiceService,
  ) { 
    this.form = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      apellido: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      foto: new FormControl('', [Validators.required]),
      tipoMascota: new FormControl('', [Validators.required]),
      raza: new FormControl('', [Validators.required]),
      edad: new FormControl(0, Validators.required),
    });
  }

  ngOnInit() {
  }

  guardarMascota() {
    this.petServ.guardarPet(
      this.logServ.loggedUser.id,
      this.form?.get('nombre')?.value,
      this.form?.get('apellido')?.value,
      this.form?.get('foto')?.value,
      this.form?.get('tipoMascota')?.value,
      this.form?.get('raza')?.value,
      this.form?.get('edad')?.value,).subscribe(res => {
        this.router.navigate(['mascotas']);
      }
    );
  }

}
