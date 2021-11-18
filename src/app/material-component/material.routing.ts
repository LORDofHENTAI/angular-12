import { Routes } from '@angular/router';
import { IshopAPIComponent } from './ishop-api/ishop-api.component';
import { DCTManagementComponent } from './dct-management/dct-management.component';
import { LoyaltyCardComponent } from './loyalty-card/loyalty-card.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { DiscordNotificationComponent } from './discord-notification/discord-notification.component';
import { LogsComponent } from './logs/logs.component';

export const MaterialRoutes: Routes = [
  {
    path: 'IshopAPI',
    component: IshopAPIComponent
  },
  {
    path: 'DCTManagment',
    component: DCTManagementComponent
  },
  {
    path: 'LoyaltyCard',
    component: LoyaltyCardComponent
  },
  {
    path: 'PaymentManagement',
    component: PaymentManagementComponent
  },
  {
    path: 'DiscordNotification',
    component: DiscordNotificationComponent
  },
  {
    path: 'Logs',
    component: LogsComponent
  }
];
