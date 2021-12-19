import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthencationGuard } from '../service/authencation.guard.service';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { DepositshistoryComponent } from './depositshistory/depositshistory.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FraudawareComponent } from './fraudaware/fraudaware.component';
import { LotteryhistoryComponent } from './lotteryhistory/lotteryhistory.component';
import { OurfeatureComponent } from './ourfeature/ourfeature.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { TwofactorsComponent } from './twofactors/twofactors.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

const routes: Routes = [ 
  {
    path: '',
    children: [{
      
   path: 'ourfeatures', component:OurfeatureComponent},
   { path: 'customsupp', component:CustomersupportComponent},
   { path: 'fraudaware', component:FraudawareComponent},
   { path: 'forgetpass', component:ForgetpasswordComponent},
  { path: 'Changepassword', component:ChangepasswordComponent},
  { path: 'twofactor', component: TwofactorsComponent},
  { path: 'restpassword', component: ResetpasswordComponent},
  { path: 'deposithistory', component: DepositshistoryComponent},
  { path: 'lotteryhistory', component: LotteryhistoryComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserControlRoutingModule { }
