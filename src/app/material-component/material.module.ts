import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';


import { IshopAPIComponent } from './ishop-api/ishop-api.component';
import { DCTManagementComponent } from './dct-management/dct-management.component';
import { LoyaltyCardComponent } from './loyalty-card/loyalty-card.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { DiscordNotificationComponent } from './discord-notification/discord-notification.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  entryComponents: [],
  declarations: [
    IshopAPIComponent,
    DCTManagementComponent,
    LoyaltyCardComponent,
    PaymentManagementComponent,
    DiscordNotificationComponent
  ]
})
export class MaterialComponentsModule { }
