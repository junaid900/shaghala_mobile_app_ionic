import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaypalCheckoutPage } from './paypal-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: PaypalCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaypalCheckoutPageRoutingModule {}
