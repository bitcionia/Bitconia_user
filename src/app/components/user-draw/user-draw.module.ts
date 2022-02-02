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
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { bitcoinToFiat } from 'bitcoin-conversion';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BalancepopupComponent } from './balancepopup/balancepopup.component';
import { DrawresultComponent } from './drawresult/drawresult.component';
import Swal from 'sweetalert2';
import { ClaimprizeComponent } from './claimprize/claimprize.component';
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
       BalancepopupComponent,
       DrawresultComponent,
       ClaimprizeComponent,
  ],
  imports: [
    CommonModule,
    UserDrawRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgbModule,
    
        FormsModule, ReactiveFormsModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class UserDrawModule { }
