import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPopupComponent } from './dialog-popup.component';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DialogPopupComponent', () => {
  let component: DialogPopupComponent;
  let fixture: ComponentFixture<DialogPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ DialogPopupComponent ],
      providers: [{provide: MatDialogRef, useValue: {}}, {provide: MAT_DIALOG_DATA, useValue: {link: ''}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
