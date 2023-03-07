import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url = 'http://vetonline.cu.ma';
  constructor(
    private httpClient: HttpClient
  ) {
  }

  loginSucc(usuario: any, pass: any) : Observable<any> {

    return this.httpClient.get(`${this.url}/login.php?usuario=${usuario}&password=${pass}`);
  }
  guardar(){
    //llama a un servicio para  registrar al usuario
  }

  tipoUser(Paciente: any,  ){
    return [{"id":"1","codigo":"PACIENTE","descripcion":"Paciente"},{"id":"2","codigo":"VETERINARIO","descripcion":"Veterinario"}]
  }
}
