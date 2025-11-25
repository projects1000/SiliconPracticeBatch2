import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitishComponent } from './ritish.component';

describe('RitishComponent', () => {
  let component: RitishComponent;
  let fixture: ComponentFixture<RitishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RitishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RitishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
