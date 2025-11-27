import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajashreeComponent } from './rajashree.component';

describe('RajashreeComponent', () => {
  let component: RajashreeComponent;
  let fixture: ComponentFixture<RajashreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajashreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RajashreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
