import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { IshopAPIComponent } from './ishop-api/ishop-api.component';
import { DCTManagementComponent } from './dct-management/dct-management.component';
import { LoyaltyCardComponent } from './loyalty-card/loyalty-card.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { DiscordNotificationComponent } from './discord-notification/discord-notification.component';
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
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'expansion',
    component: ExpansionComponent
  },
  {
    path: 'chips',
    component: ChipsComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  }
];
