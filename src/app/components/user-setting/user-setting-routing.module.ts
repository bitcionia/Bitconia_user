import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthencationGuard } from '../service/authencation.guard.service';
import { AccountactivityComponent } from './accountactivity/accountactivity.component';
import { AccountsecurityComponent } from './accountsecurity/accountsecurity.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { HowtoaddcerditComponent } from './howtoaddcerdit/howtoaddcerdit.component';
import { HowtoplayComponent } from './howtoplay/howtoplay.component';
import { HowtoplaydetailsComponent } from './howtoplaydetails/howtoplaydetails.component';
import { HowtowithdrawComponent } from './howtowithdraw/howtowithdraw.component';
import { NotificationComponent } from './notification/notification.component';
import { PirvacyComponent } from './pirvacy/pirvacy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path: '',
    // canActivate:[AuthencationGuard],
    children: [ 
      { 
        // canActivate:[AuthencationGuard],
        path: 'accountsecurity', component: AccountsecurityComponent},
{ 
  // canActivate:[AuthencationGuard],

  path: 'accountactivity', component: AccountactivityComponent},
{ 
  // canActivate:[AuthencationGuard],

  path: 'notifi', component:NotificationComponent},
{ 
  // canActivate:[AuthencationGuard],

  path: 'announcements', component:AnnouncementsComponent},
{
  
  
  path: 'howtoplay', component: HowtoplayComponent},
  { 
    // canActivate:[AuthencationGuard],

    path: 'howtoplaydetails', component:HowtoplaydetailsComponent },

  { path: 'howtoaddcerdit', component: HowtoaddcerditComponent},
  { path: 'howtowithdraw', component: HowtowithdrawComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'pirvacy', component:PirvacyComponent},
   { path: 'terms', component:TermsComponent},
  { path: 'contactus', component:ContactusComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSettingRoutingModule { }
