import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeterinariosServiceService {
  url = 'https://vetonline.cu.ma';
  constructor(
    private httpClient: HttpClient
  ) {}

  mostrarVets(){
    return this.httpClient.get(`${this.url}/veterinarios.php`);
  }

  
  
}
