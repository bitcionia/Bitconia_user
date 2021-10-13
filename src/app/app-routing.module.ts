import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentdrawComponent } from './components/Draw/currentdraw/currentdraw.component';
import { HistoryComponent } from './components/Draw/history/history.component';
import { PastdrawComponent } from './components/Draw/pastdraw/pastdraw.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AccountsecurityComponent } from './components/setting/accountsecurity/accountsecurity.component';
import { ChangepasswordComponent } from './components/setting/changepassword/changepassword.component';
import { ContactusComponent } from './components/setting/contactus/contactus.component';
import { ForgetpassComponent } from './components/setting/forgetpass/forgetpass.component';
import { PirvacyComponent } from './components/setting/pirvacy/pirvacy.component';
import { TermsComponent } from './components/setting/terms/terms.component';
import { TransactionsComponent } from './components/setting/transactions/transactions.component';
import { TwofactorsComponent } from './components/setting/twofactors/twofactors.component';
import { BuynowComponent } from './components/site/buynow/buynow.component';
import { BuyticketsComponent } from './components/site/buytickets/buytickets.component';
import { CustomersuppComponent } from './components/site/customersupp/customersupp.component';
import { FAQComponent } from './components/site/faq/faq.component';
import { FraudawarenComponent } from './components/site/fraudawaren/fraudawaren.component';
import { HowtoaddcerditComponent } from './components/site/howtoaddcerdit/howtoaddcerdit.component';
import { HowtoplayComponent } from './components/site/howtoplay/howtoplay.component';
import { HowtowithdrawComponent } from './components/site/howtowithdraw/howtowithdraw.component';
import { IndexComponent } from './components/site/index/index.component';
import { OurfeaturesComponent } from './components/site/ourfeatures/ourfeatures.component';
import { SignupComponent } from './components/site/signup/signup.component';
import { UserpanelComponent } from './components/site/userpanel/userpanel.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  // { path: 'signup', component: SignupComponent},
  { path: 'user', component: UserpanelComponent},
  { path: 'howtoplay', component: HowtoplayComponent},
  { path: 'howtoaddcerdit', component: HowtoaddcerditComponent},
  { path: 'howtowithdraw', component: HowtowithdrawComponent},
  { path: 'faq', component: FAQComponent},
  { path: 'buynow', component: BuynowComponent},
  { path: 'accountsecurity', component: AccountsecurityComponent},
  { path: 'transaction', component: TransactionsComponent},
  { path: 'twofactor', component: TwofactorsComponent},
  { path: 'ourfeatures', component:OurfeaturesComponent},
  { path: 'customsupp', component:CustomersuppComponent},
  { path: 'fuardaware', component:FraudawarenComponent},
  { path: 'history', component:HistoryComponent},
  { path: 'buytickets', component:BuyticketsComponent},

  { path: 'currentdraw', component:CurrentdrawComponent},
  // { path: 'customsupp', component:CustomersuppComponent},
  { path: 'contactus', component:ContactusComponent},
  { path: 'pastdraw', component:PastdrawComponent},
  { path: 'forgetpass', component:ForgetpassComponent},
  { path: 'Changepassword', component:ChangepasswordComponent},
  { path: 'pirvacy', component:PirvacyComponent},
  { path: 'terms', component:TermsComponent},

  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'index' }

  // { path: 'index', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
   ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
