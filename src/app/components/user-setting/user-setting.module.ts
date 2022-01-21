import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSettingRoutingModule } from './user-setting-routing.module';
import { AccountsecurityComponent } from './accountsecurity/accountsecurity.component';
import { AccountactivityComponent } from './accountactivity/accountactivity.component';
import { NotificationComponent } from './notification/notification.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { HowtoaddcerditComponent } from './howtoaddcerdit/howtoaddcerdit.component';
import { HowtoplayComponent } from './howtoplay/howtoplay.component';
import { HowtoplaydetailsComponent } from './howtoplaydetails/howtoplaydetails.component';
import { FaqComponent } from './faq/faq.component';
import { HowtowithdrawComponent } from './howtowithdraw/howtowithdraw.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PirvacyComponent } from './pirvacy/pirvacy.component';
import { TermsComponent } from './terms/terms.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {ClipboardModule} from '@angular/cdk/clipboard';

import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglesecurityComponent } from './googlesecurity/googlesecurity.component';

@NgModule({
  declarations: [
  
  
    AccountsecurityComponent,
          AccountactivityComponent,
          NotificationComponent,
          AnnouncementsComponent,
          HowtoaddcerditComponent,
          HowtoplayComponent,
          HowtoplaydetailsComponent,
          FaqComponent,
          HowtowithdrawComponent,
          ContactusComponent,
          PirvacyComponent,
          TermsComponent,
          GooglesecurityComponent,
  ],
  imports: [
    CommonModule,
    UserSettingRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    ClipboardModule

  ]
})
export class UserSettingModule { }
