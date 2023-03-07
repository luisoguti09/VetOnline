import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Event, Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-veterinarios',
  templateUrl: './veterinarios.page.html',
  styleUrls: ['./veterinarios.page.scss'],
})
export class VeterinariosPage implements OnInit {

  veterinarios: any = [];
  vets: any = [];
  searchedvets: any;
  items: any = [];

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

    this.generateItems();

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
      this.searchedvets = this.searchedvets.filter((vet: any)=> {
        return (vet.name.toLowerCase().indexOf(text.toLowerCase()) >- 1);
      }) 
    } 
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  cargandoInfo(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}

