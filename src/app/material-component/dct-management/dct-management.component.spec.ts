import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCTManagementComponent } from './dct-management.component';

describe('DCTManagementComponent', () => {
  let component: DCTManagementComponent;
  let fixture: ComponentFixture<DCTManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCTManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DCTManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
