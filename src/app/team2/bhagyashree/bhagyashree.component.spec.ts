import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhagyashreeComponent } from './bhagyashree.component';

describe('BhagyashreeComponent', () => {
  let component: BhagyashreeComponent;
  let fixture: ComponentFixture<BhagyashreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhagyashreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhagyashreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
