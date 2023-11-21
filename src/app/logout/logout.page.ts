import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    public authSrv: AuthService, 
    private router: Router,
  ) { }

  ngOnInit() {
  }
  logout(){ 
    this.authSrv.logout();
    // this.router.navigate(['login']);
  }
}
