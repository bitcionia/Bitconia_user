import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPopupRoutingModule } from './user-popup-routing.module';
import { DespoitcoinComponent } from './despoitcoin/despoitcoin.component';
import { WithdrawcoinComponent } from './withdrawcoin/withdrawcoin.component';


@NgModule({
  declarations: [
  
    DespoitcoinComponent,
       WithdrawcoinComponent
  ],
  imports: [
    CommonModule,
    UserPopupRoutingModule
  ]
})
export class UserPopupModule { }
