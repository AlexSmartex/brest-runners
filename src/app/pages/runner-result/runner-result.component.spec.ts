import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerResultComponent } from './runner-result.component';

describe('RunnerResultComponent', () => {
  let component: RunnerResultComponent;
  let fixture: ComponentFixture<RunnerResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunnerResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
