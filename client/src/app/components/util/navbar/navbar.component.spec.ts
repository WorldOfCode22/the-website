import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { SkillsComponent } from '../../routes/skills/skills.component';
import { AboutComponent } from '../../routes/about/about.component';
import { ProjectsComponent } from '../../routes/projects/projects.component';
import { HomeComponent } from '../../routes/home/home.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        RouterTestingModule,
        MatIconModule,
        MatCardModule,
        RouterTestingModule.withRoutes(routes),
        NoopAnimationsModule
      ],
      declarations: [
        NavbarComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        ProjectCardComponent,
        HomeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set fullLayout on start', () => {
    if (window.screen.width > 999) {
      expect(component.FullLayout).toBeTruthy();
    } else {
      expect(component.FullLayout).toBeFalsy();
    }
  });

  // testing of navbar links in full layout mode

  it('Navigates to home page on home link click in fullLayout', fakeAsync(() => {
    router.navigate(['/about']);
    tick();
    const elem = fixture.nativeElement.querySelector('#full-home-nav');
    elem.click();
    tick();
    expect(location.path()).toBe('/');
  }));

  it('Navigates to about page on about link click in fullLayout', fakeAsync(() => {
    router.navigate(['/']);
    tick();
    const elem = fixture.nativeElement.querySelector('#full-about-nav');
    elem.click();
    tick();
    expect(location.path()).toBe('/about');
  }));

  it('Navigates to projects page on projects link click in fullLayout', fakeAsync(() => {
    router.navigate(['/']);
    tick();
    const elem = fixture.nativeElement.querySelector('#full-projects-nav');
    elem.click();
    tick();
    expect(location.path()).toBe('/projects');
  }));

  it('Navigates to skills page on skills link click in fullLayout', fakeAsync(() => {
    router.navigate(['/']);
    tick();
    const elem = fixture.nativeElement.querySelector('#full-skills-nav');
    elem.click();
    tick();
    expect(location.path()).toBe('/skills');
  }));

  // testing of navbar links in drop down mode
  it('Navigates to home page on home link click in dropdown', fakeAsync(() => {
    router.navigate(['/about']);
    tick();
    component.FullLayout = false;
    fixture.detectChanges();
    const elem = fixture.nativeElement.querySelector('#drop-home-nav');
    elem.click();
    tick();
    expect(location.path()).toBe('/');
  }));

  // TODO: figure out how to test dropdown
  // TODO: Add test for breakpoint on screen size change
});
