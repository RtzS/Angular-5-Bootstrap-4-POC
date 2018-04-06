import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const pageRoutes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: 'aboutPage', component: AboutComponent },
  { path: 'contactPage', component: ContactComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(pageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageRoutingModule { }
