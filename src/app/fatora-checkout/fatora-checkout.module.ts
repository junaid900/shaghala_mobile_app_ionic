import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FatoraCheckoutPageRoutingModule } from './fatora-checkout-routing.module';

import { FatoraCheckoutPage } from './fatora-checkout.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FatoraCheckoutPageRoutingModule,
    TranslateModule
  ],
  declarations: [FatoraCheckoutPage]
})
export class FatoraCheckoutPageModule {}
