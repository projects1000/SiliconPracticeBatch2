import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinmayaComponent } from './chinmaya.component';

describe('ChinmayaComponent', () => {
  let component: ChinmayaComponent;
  let fixture: ComponentFixture<ChinmayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinmayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChinmayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
