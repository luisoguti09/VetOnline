import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  public url = 'https://vetonline.cu.ma';
  public httpOptions: any;

  constructor(
    private httpClient: HttpClient) 
    {
      this.httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
    }

  mostrarPets(){
    return this.httpClient.get(`${this.url}/mascotas.php`);
  }

  guardarPet(nombre: string, apellido: string, foto: string, tipoMascota: string, raza: string, edad: string){
    return this.httpClient.post(`${this.url}/mascotas.php`,{
      nombre, 
      apellido,
      foto,
      tipoMascota,
      raza,
      edad
    },this.httpOptions)
  }
}
