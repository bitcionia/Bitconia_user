import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserControlRoutingModule } from './user-control-routing.module';
import { OurfeatureComponent } from './ourfeature/ourfeature.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { FraudawareComponent } from './fraudaware/fraudaware.component';
import { TwofactorsComponent } from './twofactors/twofactors.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ToastrModule } from 'ngx-toastr';
import { DepositshistoryComponent } from './depositshistory/depositshistory.component';
import { LotteryhistoryComponent } from './lotteryhistory/lotteryhistory.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
  
    OurfeatureComponent,
       CustomersupportComponent,
       FraudawareComponent,
       TwofactorsComponent,
       ChangepasswordComponent,
       ForgetpasswordComponent,
       ResetpasswordComponent,
       DepositshistoryComponent,
       LotteryhistoryComponent
  ],
  imports: [
    CommonModule,
    UserControlRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000
      }
    ),
    NgxPaginationModule,
  ]
})
export class UserControlModule { }
