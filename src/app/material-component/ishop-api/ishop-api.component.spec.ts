import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IshopAPIComponent } from './ishop-api.component';

describe('IshopAPIComponent', () => {
  let component: IshopAPIComponent;
  let fixture: ComponentFixture<IshopAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IshopAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IshopAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
