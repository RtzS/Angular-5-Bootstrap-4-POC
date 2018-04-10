import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { PageRoutingModule } from './../page-routing.modules';
import { RouterService } from '../../shared/router/router.service';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { AboutComponent } from '../about/about.component';
import { CarousalComponent } from '../../shared/components/carousal/carousal.component';
import { HomePageComponent } from '../home-page/home-page.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ PageRoutingModule,RouterTestingModule,RouterModule ],
      declarations: [ ContactComponent,AboutComponent,HomePageComponent,CarousalComponent,HeaderComponent,FooterComponent ],
       providers : [RouterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
