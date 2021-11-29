import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';



const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  

  // 
  

  // {
  //   path: '',
  //   redirectTo: 'index',
  //   pathMatch: 'full'
  // },
  { path: 'user-control', loadChildren: () => import('./components/user-control/user-control.module').then(m => m.UserControlModule) },
  { path: 'user-setting', loadChildren: () => import('./components/user-setting/user-setting.module').then(m => m.UserSettingModule) },
  { path: 'user-Draw', loadChildren: () => import('./components/user-draw/user-draw.module').then(m => m.UserDrawModule) },
  { path: 'user-popup', loadChildren: () => import('./components/user-popup/user-popup.module').then(m => m.UserPopupModule) },

  { path: '**', redirectTo: 'index' }

  // { path: 'index', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
   
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
