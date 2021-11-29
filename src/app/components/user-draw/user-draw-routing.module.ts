import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthencationGuard } from '../service/authencation.guard.service';
import { BuynowComponent } from './buynow/buynow.component';
import { CartComponent } from './cart/cart.component';
import { ClaimprizeComponent } from './claimprize/claimprize.component';
import { CurrentdrawComponent } from './currentdraw/currentdraw.component';
import { HistoryComponent } from './history/history.component';
import { MyticketComponent } from './myticket/myticket.component';
import { PastdrawComponent } from './pastdraw/pastdraw.component';
import { TranscationComponent } from './transcation/transcation.component';
import { WalletComponent } from './wallet/wallet.component';


const routes: Routes =[
  {
  path: '',
  canActivate:[AuthencationGuard],
  children: [
  { path: 'buynow', component:BuynowComponent},
  { path: 'cart', component:CartComponent},
  { path: 'trans', component: TranscationComponent},
  { path: 'myticket', component: MyticketComponent},
  { path: 'currentdraw', component: CurrentdrawComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'wallet', component: WalletComponent},
  { path: 'pastdraw', component: PastdrawComponent},
  { path: 'claimprize', component: ClaimprizeComponent},
  

  ]
  }
    // canActivate:[AuthencationGuard],


  
 
  


]; 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDrawRoutingModule { }
