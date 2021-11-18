import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'IshopAPI', type: 'link', name: 'IshopAPI', icon: 'shopping_basket' },
  { state: 'DCTManagment', type: 'link', name: 'DCT Management', icon: 'system_security_update_warning' },
  { state: 'LoyaltyCard', type: 'link', name: 'Loyalty Card', icon: 'credit_card' },
  { state: 'PaymentManagement', type: 'link', name: 'Payment Management', icon: 'monetization_on' },
  { state: 'DiscordNotification', type: 'link', name: 'Discord Notification', icon: 'vibration' },
  { state: 'Logs', type: 'link', name: 'Logs', icon: 'list' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
