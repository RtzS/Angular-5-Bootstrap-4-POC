import { Injectable } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpModule } from '@angular/http';

@Injectable()
export class RouterService{

  constructor(public router: Router) {}

  navigateTo(url : String): void {
    this.router.navigate([url]);
  }
}