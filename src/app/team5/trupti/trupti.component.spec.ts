import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruptiComponent } from './trupti.component';

describe('TruptiComponent', () => {
  let component: TruptiComponent;
  let fixture: ComponentFixture<TruptiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruptiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruptiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
