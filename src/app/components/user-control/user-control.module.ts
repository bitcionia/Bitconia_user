import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserControlRoutingModule } from './user-control-routing.module';
import { OurfeatureComponent } from './ourfeature/ourfeature.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { FraudawareComponent } from './fraudaware/fraudaware.component';
import { TwofactorsComponent } from './twofactors/twofactors.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';


@NgModule({
  declarations: [
  
    OurfeatureComponent,
       CustomersupportComponent,
       FraudawareComponent,
       TwofactorsComponent,
       ChangepasswordComponent,
       ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    UserControlRoutingModule
  ]
})
export class UserControlModule { }
