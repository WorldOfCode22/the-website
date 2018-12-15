import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a row for each skill entry', () => {
    const skills = component.Skills;
    expect(skills.length).toEqual(fixture.nativeElement.querySelectorAll('tbody > tr').length);
  });

  it('should render the skill as the first element of each row', () => {
    for (let i = 0; i < component.Skills.length; i++) {
      checkSkillRender(i, i);
    }
  });

  it('should render the confidence as the second element of each row', () => {
    for (let i = 0; i < component.Skills.length; i++) {
      checkSkillRender(i, i);
    }
  });

  function checkSkillRender(nodeIndex: number, skillIndex: number) {
    const rowNodes = fixture.nativeElement.querySelectorAll('tbody > tr');
    const currentRow = rowNodes[nodeIndex];
    const skillNode = currentRow.childNodes[0];
    expect(skillNode.textContent).toEqual(component.Skills[skillIndex].skill);
  }

  function checkConfidenceRender(nodeIndex: number, confidenceIndex: number) {
    const rowNodes = fixture.nativeElement.querySelectorAll('tbody > tr');
    const currentRow = rowNodes[nodeIndex];
    const skillNode = currentRow.childNodes[1];
    expect(skillNode.textContent).toEqual(component.Skills[confidenceIndex].confidence);
  }
});
