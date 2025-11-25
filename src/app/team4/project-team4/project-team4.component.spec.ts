import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTeam4Component } from './project-team4.component';

describe('ProjectTeam4Component', () => {
  let component: ProjectTeam4Component;
  let fixture: ComponentFixture<ProjectTeam4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTeam4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTeam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
