import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { TranslateModule } from '@ngx-translate/core';
import { OtpPage } from '../otp/otp.page';
import { OtpPageModule } from '../otp/otp.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    TranslateModule,
    OtpPageModule,
  ],
  // providers:[OtpPage],
  declarations: [SignupPage]
})
export class SignupPageModule {}
