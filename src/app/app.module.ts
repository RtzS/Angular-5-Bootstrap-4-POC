import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PageModule } from '../app/pages/page.module';
import { RouterService } from '../app/shared/router/router.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PageModule,
    HttpModule
  ],
  providers: [RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { 
   constructor() {

  }
}
