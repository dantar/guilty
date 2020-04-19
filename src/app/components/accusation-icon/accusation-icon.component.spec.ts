import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccusationIconComponent } from './accusation-icon.component';

describe('AccusationIconComponent', () => {
  let component: AccusationIconComponent;
  let fixture: ComponentFixture<AccusationIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccusationIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccusationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
