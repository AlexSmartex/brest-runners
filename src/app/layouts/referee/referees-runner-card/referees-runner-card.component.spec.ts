import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereesRunnerCardComponent } from './referees-runner-card.component';

describe('RefereesRunnerCardComponent', () => {
  let component: RefereesRunnerCardComponent;
  let fixture: ComponentFixture<RefereesRunnerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereesRunnerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereesRunnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
