import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeTwoComponent } from './like-two.component';

describe('LikeTwoComponent', () => {
  let component: LikeTwoComponent;
  let fixture: ComponentFixture<LikeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
