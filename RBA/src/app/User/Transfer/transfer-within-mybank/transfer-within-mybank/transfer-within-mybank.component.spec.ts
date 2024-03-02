import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferWithinMybankComponent } from './transfer-within-mybank.component';

describe('TransferWithinMybankComponent', () => {
  let component: TransferWithinMybankComponent;
  let fixture: ComponentFixture<TransferWithinMybankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferWithinMybankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferWithinMybankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
