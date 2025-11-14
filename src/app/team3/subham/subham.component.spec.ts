import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubhamComponent } from './subham.component';

describe('SubhamComponent', () => {
  let component: SubhamComponent;
  let fixture: ComponentFixture<SubhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubhamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
