import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JigyansaComponent } from './jigyansa.component';

describe('JigyansaComponent', () => {
  let component: JigyansaComponent;
  let fixture: ComponentFixture<JigyansaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JigyansaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JigyansaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
