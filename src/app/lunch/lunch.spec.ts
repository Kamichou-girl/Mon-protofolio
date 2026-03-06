import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lunch } from './lunch';

describe('Lunch', () => {
  let component: Lunch;
  let fixture: ComponentFixture<Lunch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lunch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lunch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
