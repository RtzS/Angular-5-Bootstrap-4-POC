import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../../shared/router/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public RouterService : RouterService) { }

  ngOnInit() {
  }
  openHome(){
    this.RouterService.navigateTo('/homePage'); 
  }
  openAbout(){
    this.RouterService.navigateTo('/aboutPage'); 
  }
  openContact(){
    this.RouterService.navigateTo('/contactPage'); 
  }
}
