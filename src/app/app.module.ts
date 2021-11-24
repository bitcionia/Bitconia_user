import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

// import { NgxCaptchaModule } from 'ngx-captcha';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './components/index/index.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxCaptchaModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    MatTabsModule,
    HttpClientModule,
    NgxIntlTelInputModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000
      }
    ),

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers:[],

  providers:[{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
