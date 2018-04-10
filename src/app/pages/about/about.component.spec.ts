import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterService } from '../../shared/router/router.service';
import { PageRoutingModule } from './../page-routing.modules';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { CarousalComponent } from '../../shared/components/carousal/carousal.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ContactComponent } from '../contact/contact.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [PageRoutingModule,RouterModule,RouterTestingModule],
      declarations: [ AboutComponent,HomePageComponent,ContactComponent,CarousalComponent,HeaderComponent,FooterComponent ],
       providers : [RouterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
