import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordNotificationComponent } from './discord-notification.component';

describe('DiscordNotificationComponent', () => {
  let component: DiscordNotificationComponent;
  let fixture: ComponentFixture<DiscordNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscordNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
