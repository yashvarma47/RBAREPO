import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferWithinMyaccountComponent } from './tranfer-within-myaccount.component';

describe('TranferWithinMyaccountComponent', () => {
  let component: TranferWithinMyaccountComponent;
  let fixture: ComponentFixture<TranferWithinMyaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranferWithinMyaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferWithinMyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
