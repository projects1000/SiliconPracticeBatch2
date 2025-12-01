import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebaComponent } from './deba.component';

describe('DebaComponent', () => {
  let component: DebaComponent;
  let fixture: ComponentFixture<DebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
