import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/util/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { AboutComponent } from './components/routes/about/about.component';
import { ProjectsComponent } from './components/routes/projects/projects.component';
import { SkillsComponent } from './components/routes/skills/skills.component';
import { HomeComponent } from './components/routes/home/home.component';
import { FooterComponent } from './components/util/footer/footer.component';
import { ProjectCardComponent } from './components/util/project-card/project-card.component';
import { MatCardModule } from '@angular/material/card';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        LayoutModule,
        MatCardModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        AboutComponent,
        ProjectsComponent,
        SkillsComponent,
        HomeComponent,
        FooterComponent,
        ProjectCardComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
