import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageRoutingModule } from './page-routing.modules';
import { SharedComponents } from '../shared/components/index';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PageRoutingModule
  ],
  declarations: [HomePageComponent,SharedComponents, AboutComponent, ContactComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PageModule { }
