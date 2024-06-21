import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardPaymentPage } from '../card-payment/card-payment.page';

import { PaymentPage } from './payment.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[CardPaymentPage]
})
export class PaymentPageRoutingModule {}
