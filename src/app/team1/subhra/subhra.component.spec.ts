import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubhraComponent } from './subhra.component';

describe('SubhraComponent', () => {
  let component: SubhraComponent;
  let fixture: ComponentFixture<SubhraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubhraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubhraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
