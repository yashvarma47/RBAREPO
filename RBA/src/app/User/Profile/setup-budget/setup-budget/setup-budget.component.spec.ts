import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupBudgetComponent } from './setup-budget.component';

describe('SetupBudgetComponent', () => {
  let component: SetupBudgetComponent;
  let fixture: ComponentFixture<SetupBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
