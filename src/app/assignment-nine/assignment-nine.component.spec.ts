import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentNineComponent } from './assignment-nine.component';

describe('AssignmentNineComponent', () => {
  let component: AssignmentNineComponent;
  let fixture: ComponentFixture<AssignmentNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
