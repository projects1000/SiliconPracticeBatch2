import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanishComponent } from './tanish.component';

describe('TanishComponent', () => {
  let component: TanishComponent;
  let fixture: ComponentFixture<TanishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
