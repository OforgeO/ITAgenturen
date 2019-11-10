import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeConsultantComponent } from './become-consultant.component';

describe('BecomeConsultantComponent', () => {
  let component: BecomeConsultantComponent;
  let fixture: ComponentFixture<BecomeConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
