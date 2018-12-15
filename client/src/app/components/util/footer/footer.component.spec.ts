import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import {Location} from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../../routes/home/home.component';
import { Router } from '@angular/router';
import { SkillsComponent } from '../../routes/skills/skills.component';
import { AboutComponent } from '../../routes/about/about.component';
import { ProjectsComponent } from '../../routes/projects/projects.component';
import { MatCardModule } from '@angular/material/card';
import { ProjectCardComponent } from '../project-card/project-card.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {path: '', component: HomeComponent},
        {path: 'skills', component: SkillsComponent},
        {path: 'about', component: AboutComponent},
        {path: 'projects', component: ProjectsComponent}
      ]),
      MatCardModule
    ],
      declarations: [
        FooterComponent,
        HomeComponent,
        SkillsComponent,
        AboutComponent,
        ProjectsComponent,
        ProjectCardComponent
      ]
    })
    .compileComponents();
    location = TestBed.get(Location);
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display website version', () => {
    expect(fixture.nativeElement.querySelector('#web-version').textContent)
    .toEqual(`Website: ${component.WebsiteVersion}`);
  });

  it('should display API version', () => {
    expect(fixture.nativeElement.querySelector('#api-version').textContent)
    .toEqual(`API: ${component.ApiVersion}`);
  });

  it('should display year', () => {
    expect(fixture.nativeElement.querySelector('#year').textContent)
    .toEqual(`© ${component.Year} by Sloan Gwaltney.`);
  });

  it('should change route to / when home is clicked', fakeAsync(
    () => {
      router.navigate(['/skills']);
      tick();
      const homeNav = fixture.nativeElement.querySelector('#home-nav');
      homeNav.click();
      tick();
      expect(location.path()).toEqual('/');
    }
  ));

  it('should change route to /about when about is clicked', fakeAsync(
    () => {
      router.navigate(['/']);
      tick();
      const aboutNav = fixture.nativeElement.querySelector('#about-nav');
      aboutNav.click();
      tick();
      expect(location.path()).toEqual('/about');
    }
  ));

  it('should change route to /projects when projects is clicked', fakeAsync(
    () => {
      router.navigate(['/']);
      tick();
      const projectsNav = fixture.nativeElement.querySelector('#projects-nav');
      projectsNav.click();
      tick();
      expect(location.path()).toEqual('/projects');
    }
  ));

  it('should change route to /skills when skills is clicked', fakeAsync(
    () => {
      router.navigate(['/']);
      tick();
      const skillsNav = fixture.nativeElement.querySelector('#skills-nav');
      skillsNav.click();
      tick();
      expect(location.path()).toEqual('/skills');
    }
  ));
});
