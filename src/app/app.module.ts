import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { IndexComponent } from './components/site/index/index.component';
import { SignupComponent } from './components/site/signup/signup.component';
import { UserpanelComponent } from './components/site/userpanel/userpanel.component';
import { BuyticketsComponent } from './components/site/buytickets/buytickets.component';
import { HowtoplayComponent } from './components/site/howtoplay/howtoplay.component';
import { HowtoaddcerditComponent } from './components/site/howtoaddcerdit/howtoaddcerdit.component';
import { HowtowithdrawComponent } from './components/site/howtowithdraw/howtowithdraw.component';
import { FAQComponent } from './components/site/faq/faq.component';
import { BuynowComponent } from './components/site/buynow/buynow.component';
import { AccountsecurityComponent } from './components/setting/accountsecurity/accountsecurity.component';
import { TransactionsComponent } from './components/setting/transactions/transactions.component';
import { TwofactorsComponent } from './components/setting/twofactors/twofactors.component';
import { OurfeaturesComponent } from './components/site/ourfeatures/ourfeatures.component';
import { CustomersuppComponent } from './components/site/customersupp/customersupp.component';
import { FraudawarenComponent } from './components/site/fraudawaren/fraudawaren.component';
import { CurrentdrawComponent } from './components/Draw/currentdraw/currentdraw.component';
import { HistoryComponent } from './components/Draw/history/history.component';
import { ContactusComponent } from './components/setting/contactus/contactus.component';
import { PastdrawComponent } from './components/Draw/pastdraw/pastdraw.component';
import { ForgetpassComponent } from './components/setting/forgetpass/forgetpass.component';
import { ChangepasswordComponent } from './components/setting/changepassword/changepassword.component';
import { PirvacyComponent } from './components/setting/pirvacy/pirvacy.component';
import { TermsComponent } from './components/setting/terms/terms.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CreateaccountComponent } from './components/popup/createaccount/createaccount.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    SignupComponent,
    UserpanelComponent,
    BuyticketsComponent,
    HowtoplayComponent,
    HowtoaddcerditComponent,
    HowtowithdrawComponent,
    FAQComponent,
    BuynowComponent,
    AccountsecurityComponent,
  
    TransactionsComponent,
    TwofactorsComponent,
    OurfeaturesComponent,
    CustomersuppComponent,
    FraudawarenComponent,
    CurrentdrawComponent,
    HistoryComponent,
    ContactusComponent,
    PastdrawComponent,
    ForgetpassComponent,
    ChangepasswordComponent,
    PirvacyComponent,
    TermsComponent,
    CreateaccountComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCaptchaModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    MatTabsModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers:[{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
