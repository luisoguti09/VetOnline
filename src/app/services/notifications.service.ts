import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  public url = 'https://vetonline.cu.ma';
  public  httpOptions: any;

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  recieveCall(idMedico: number, idUser: number): Observable<any>{
    return this.httpClient.post(
    `${this.url}/notificaciones.php`,
    {id_medico: idMedico, "id_user": idUser},
    this.httpOptions);
  }

}
