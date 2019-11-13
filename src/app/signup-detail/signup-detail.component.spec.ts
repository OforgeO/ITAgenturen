import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDetailComponent } from './signup-detail.component';

describe('SignupDetailComponent', () => {
  let component: SignupDetailComponent;
  let fixture: ComponentFixture<SignupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
