import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersRunnerPageComponent } from './counters-runner-page.component';

describe('CountersRunnerPageComponent', () => {
  let component: CountersRunnerPageComponent;
  let fixture: ComponentFixture<CountersRunnerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountersRunnerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountersRunnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
