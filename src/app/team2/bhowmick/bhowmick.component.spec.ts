import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhowmickComponent } from './bhowmick.component';

describe('BhowmickComponent', () => {
  let component: BhowmickComponent;
  let fixture: ComponentFixture<BhowmickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhowmickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhowmickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
