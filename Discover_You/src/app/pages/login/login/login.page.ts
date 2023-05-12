import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscoverService } from 'src/app/services/discover.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string = "";

  constructor(private router: Router, private discoverServ: DiscoverService) { }

  ngOnInit() {
  }

  //route to the home page
  goToHome(){
    console.log(this.userName)
    this.discoverServ.updateName(this.userName);
    this.router.navigate(['/tabs/tab1']);
  }
}
