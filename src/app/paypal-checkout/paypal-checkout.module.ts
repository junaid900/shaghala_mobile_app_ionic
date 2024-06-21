import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaypalCheckoutPageRoutingModule } from './paypal-checkout-routing.module';

import { PaypalCheckoutPage } from './paypal-checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaypalCheckoutPageRoutingModule
  ],
  declarations: [PaypalCheckoutPage]
})
export class PaypalCheckoutPageModule {}
