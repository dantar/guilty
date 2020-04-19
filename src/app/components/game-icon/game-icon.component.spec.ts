import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameIconComponent } from './game-icon.component';

describe('GameIconComponent', () => {
  let component: GameIconComponent;
  let fixture: ComponentFixture<GameIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
