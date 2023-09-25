import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrgenciaService {

  public url = 'https://vetonline.cu.ma';
  public httpOptions: any;
  public acepta!: boolean;

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  aceptaUrg(aceptaUrgencia: string, id: number){
    return this.httpClient.get(`${this.url}/urgencia.php`);
  }
}
