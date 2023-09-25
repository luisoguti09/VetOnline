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

  mostrarPets(idHumano: number){
    return this.httpClient.get(`${this.url}/mascotas.php?id=${idHumano}`);
  }

  guardarPet(idHumano: number, nombre: string, apellido: string, foto: string, tipoMascota: string, raza: string, edad: string){
    return this.httpClient.post(`${this.url}/mascotas.php`,{
      idHumano,
      nombre, 
      apellido,
      foto,
      tipoMascota,
      raza,
      edad
    },this.httpOptions)
  }
}
