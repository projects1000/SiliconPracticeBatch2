import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrathanaComponent } from './prathana.component';

describe('PrathanaComponent', () => {
  let component: PrathanaComponent;
  let fixture: ComponentFixture<PrathanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrathanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrathanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
