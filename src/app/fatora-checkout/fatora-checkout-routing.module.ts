import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FatoraCheckoutPage } from './fatora-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: FatoraCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FatoraCheckoutPageRoutingModule {}
