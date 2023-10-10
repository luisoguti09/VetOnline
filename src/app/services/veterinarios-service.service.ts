import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeterinariosServiceService {

  public conect: string = "";
  public url = 'https://vetonline.cu.ma';
  public httpOptions: any;
  public consulta!: boolean;
  public procedeUrg!: any;
  public selectedVet: any;

   
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

  atiendeUrg(aceptaUrg: string){
    return this.httpClient.get(`${this.url}/veterinarios.php?atiende_urg=${aceptaUrg}`)
  }

  urgencia(){
    return this.mostrarVets();
   
  }

  choseenOne(id: any){
    return this.httpClient.get(`${this.url}/login.php?id`);
  }

  changeStatus(status: string, id: number){
    return this.httpClient.put(`${this.url}/status.php`,{
      "status": status,
      "id": id
    },this.httpOptions);
  }

  recibirCons(tipoConsulta: string, id: number){
    return this.httpClient.get(`${this.url}/tipoConsulta.php`);
  }

  consultarHistorial(id: number){
    return this.httpClient.get(`${this.url}/historial.php?id_mascota=${id}`);
  }
  setSelectedVet(vet: any) {
    this.selectedVet = vet;
  }


  
  
}
