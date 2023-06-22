import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeterinariosServiceService {

  conect: string = "";
  status: boolean = false;
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

  mostrarVets(){
    return this.httpClient.get(`${this.url}/veterinarios.php`);
  }

  choseenOne(id: any){
    return this.httpClient.get(`${this.url}/login.php?id`);
  }

  changeStatus(status: string, tipoConsulta: string){
    return this.httpClient.put(`${this.url}/status.php`,{
      status,
      tipoConsulta
    },this.httpOptions);
  }
  
  
}
