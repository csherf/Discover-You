import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DiscoverService } from '../services/discover.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  username: Observable<string>;


  constructor(private router: Router, private discoverServ: DiscoverService) {
    this.username = this.discoverServ.getName();
  }

  goToHome(){
    this.router.navigate(['/login'])
  }
}
