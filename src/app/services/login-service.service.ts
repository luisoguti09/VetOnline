import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url = 'https://vetonline.cu.ma';
  httpOptions: any;
   
  constructor(
    private httpClient: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  loginSucc(usuario: any, pass: any) : Observable<any> {

    return this.httpClient.get(`${this.url}/login.php?usuario=${usuario}&password=${pass}`);
  }
  guardar(nombre: string, apellido: string, email: string, pass: string, tipoUsuario: string ){
    return this.httpClient.post(`${this.url}/registro.php`,{
      nombre, 
      apellido,
      tipoUsuario,
      password: pass,
      usuario: email
    },this.httpOptions)
  }

  tipoUser(){
   return this.httpClient.get(`${this.url}/tipoUsuario.php`)
  }

}
