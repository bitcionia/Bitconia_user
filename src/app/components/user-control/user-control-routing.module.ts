import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FraudawareComponent } from './fraudaware/fraudaware.component';
import { OurfeatureComponent } from './ourfeature/ourfeature.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { TwofactorsComponent } from './twofactors/twofactors.component';

const routes: Routes = [ {
   path: 'ourfeatures', component:OurfeatureComponent},
   { path: 'customsupp', component:CustomersupportComponent},
   { path: 'fraudaware', component:FraudawareComponent},
   { path: 'forgetpass', component:ForgetpasswordComponent},
  { path: 'Changepassword', component:ChangepasswordComponent},
  { path: 'twofactor', component: TwofactorsComponent},
  { path: 'restpassword', component: ResetpasswordComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserControlRoutingModule { }
