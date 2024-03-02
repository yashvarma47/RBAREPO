import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetUseridComponent } from './forget-userid.component';

describe('ForgetUseridComponent', () => {
  let component: ForgetUseridComponent;
  let fixture: ComponentFixture<ForgetUseridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetUseridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetUseridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
