import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url = 'http://localhost:8000/veterinarios';
  constructor(
    private httpClient: HttpClient
  ) {
  }

  loginSucc(usuario: any, pass: any) {

    if (usuario == 'luis@gmail.com' && pass == '123') {
      
      return { succes: true } ;
    } else {
      return { succes: false };
    }
  }
}
