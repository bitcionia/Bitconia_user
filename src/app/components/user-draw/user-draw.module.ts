import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { UserDrawRoutingModule } from './user-draw-routing.module';
import { CurrentdrawComponent } from './currentdraw/currentdraw.component';
import { HistoryComponent } from './history/history.component';
import { WalletComponent } from './wallet/wallet.component';
import { CartComponent } from './cart/cart.component';
import { BuynowComponent } from './buynow/buynow.component';
import { MyticketComponent } from './myticket/myticket.component';
import { TranscationComponent } from './transcation/transcation.component';
import { PastdrawComponent } from './pastdraw/pastdraw.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
    CurrentdrawComponent,
       HistoryComponent,
       WalletComponent,
       CartComponent,
       BuynowComponent,
       MyticketComponent,
       TranscationComponent,
       PastdrawComponent,
  ],
  imports: [
    CommonModule,
    UserDrawRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,

        FormsModule, ReactiveFormsModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class UserDrawModule { }
