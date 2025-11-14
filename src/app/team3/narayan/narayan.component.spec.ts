import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarayanComponent } from './narayan.component';

describe('NarayanComponent', () => {
  let component: NarayanComponent;
  let fixture: ComponentFixture<NarayanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarayanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarayanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
