import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';
import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';
import { FatoraCheckoutPageModule } from '../fatora-checkout/fatora-checkout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPageRoutingModule,
    FatoraCheckoutPageModule
  ],
  declarations: [PaymentPage],
  providers:[Stripe]
})
export class PaymentPageModule {}
