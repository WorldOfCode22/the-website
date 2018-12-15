import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardComponent } from './project-card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, RouterTestingModule, MatDialogModule, NoopAnimationsModule],
      declarations: [ ProjectCardComponent, DialogPopupComponent],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [DialogPopupComponent]
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    component.Card = {title: '', subtitle: '', content: '', image: '', link: '', localLink: false};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
