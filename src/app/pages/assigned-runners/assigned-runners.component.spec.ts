import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedRunnersComponent } from './assigned-runners.component';

describe('AssignedRunnersComponent', () => {
  let component: AssignedRunnersComponent;
  let fixture: ComponentFixture<AssignedRunnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedRunnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedRunnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
