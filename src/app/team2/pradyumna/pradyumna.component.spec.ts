import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PradyumnaComponent } from './pradyumna.component';

describe('PradyumnaComponent', () => {
  let component: PradyumnaComponent;
  let fixture: ComponentFixture<PradyumnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PradyumnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PradyumnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
