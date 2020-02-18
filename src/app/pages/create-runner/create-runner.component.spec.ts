import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRunnerComponent } from './create-runner.component';

describe('CreateRunnerComponent', () => {
  let component: CreateRunnerComponent;
  let fixture: ComponentFixture<CreateRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRunnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
