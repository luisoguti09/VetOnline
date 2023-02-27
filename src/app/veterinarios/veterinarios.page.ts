import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-veterinarios',
  templateUrl: './veterinarios.page.html',
  styleUrls: ['./veterinarios.page.scss'],
})
export class VeterinariosPage implements OnInit {

  veterinarios: any = [];
  vets: any = [];
  searchedvets: any;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {

    this.getVeterinarios().subscribe(res => {
      console.log("Res", res)
      this.vets = res;
      this.searchedvets = this.vets;
    });

  }

  getVeterinarios() {
    return this.http
      .get("assets/files/veterinarios.json")
      .pipe(
        map((res: any) => {
          return res.data;
        }
        ));
  }

  searchVet(event: any) {
    const text = event.target.value;
    this.searchedvets = this.vets;
    if (text && text.trim() != '') {
      this.searchedvets = this.searchedvets.filter((vets: any)=> {
        return (this.vets.name.toLowerCase().indexOf(text.toLowerCase()) - 1)
      })
    } 

  }
}
