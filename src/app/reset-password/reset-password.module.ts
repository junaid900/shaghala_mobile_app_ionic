import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPasswordPageRoutingModule } from './reset-password-routing.module';

import { ResetPasswordPage } from './reset-password.page';
import { TranslateModule } from '@ngx-translate/core';
import { OtpPage } from '../otp/otp.page';
import { OtpPageModule } from '../otp/otp.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswordPageRoutingModule,
    TranslateModule,
    OtpPageModule,
  ],
  declarations: [ResetPasswordPage],
  // providers:[OtpPage]
})
export class ResetPasswordPageModule {}
