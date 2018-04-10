import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutingModule } from './../page-routing.modules';
import { RouterService } from '../../shared/router/router.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CarousalComponent } from '../../shared/components/carousal/carousal.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ PageRoutingModule,RouterModule,RouterTestingModule ],
      declarations: [ HomePageComponent,AboutComponent,ContactComponent,CarousalComponent,HeaderComponent,FooterComponent],
      providers : [RouterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
