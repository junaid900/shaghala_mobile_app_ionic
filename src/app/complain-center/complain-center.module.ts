import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplainCenterPageRoutingModule } from './complain-center-routing.module';

import { ComplainCenterPage } from './complain-center.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplainCenterPageRoutingModule,
    TranslateModule,
  ],
  declarations: [ComplainCenterPage]
})
export class ComplainCenterPageModule {}
