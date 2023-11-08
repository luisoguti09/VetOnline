import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private authSrv: AuthService, 
  ) { }

  ngOnInit() {
  }
  logout(){
    this.authSrv.logout();
  }
}
