import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmpriyaComponent } from './ompriya.component';

describe('OmpriyaComponent', () => {
  let component: OmpriyaComponent;
  let fixture: ComponentFixture<OmpriyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmpriyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmpriyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
