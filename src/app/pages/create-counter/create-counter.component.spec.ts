import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCounterComponent } from './create-counter.component';

describe('CreateCounterComponent', () => {
  let component: CreateCounterComponent;
  let fixture: ComponentFixture<CreateCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
