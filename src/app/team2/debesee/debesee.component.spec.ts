import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebeseeComponent } from './debesee.component';

describe('DebeseeComponent', () => {
  let component: DebeseeComponent;
  let fixture: ComponentFixture<DebeseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebeseeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebeseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
