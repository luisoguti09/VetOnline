import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url = 'https://vetonline.cu.ma';
  httpOptions: any;
  tipoUsers: boolean = false;
  status: boolean = false;
  public loggedUser!: any;
   
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

  loginUser(vetAsoc:any) : Observable<any> { 
    return this.httpClient.get(`${this.url}/login.php?vet-asoc-id=${vetAsoc}`);
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

  loginVet(tipoUser:any){
    return this.httpClient.get(`${this.url}/login.php?tipoUser=${tipoUser}`);
  }

}
