import { Injectable } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Injectable({
  providedIn: 'root'
})
export class FirebasexService {

private firebaseConfig: any;
private app: any;
private analytics: any;

  constructor() {
    this.firebaseConfig = {
      apiKey: "AIzaSyCujsuUmjfBO1uOI1u5g7vjlaaEU5aDAu4",
      authDomain: "vet-online-app.firebaseapp.com",
      projectId: "vet-online-app",
      storageBucket: "vet-online-app.appspot.com",
      messagingSenderId: "798608065411",
      appId: "1:798608065411:web:d840a6b94abc9e89c22cb6",
      measurementId: "G-22J0Q7GB3N"
    };
    this.app = initializeApp(this.firebaseConfig);
    this.analytics = getAnalytics(this.app);
   }

   test(){
    console.log(this.analytics);
    console.log(this.app);
   }
}
