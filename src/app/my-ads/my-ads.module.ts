import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAdsPageRoutingModule } from './my-ads-routing.module';

import { MyAdsPage } from './my-ads.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAdsPageRoutingModule,
    TranslateModule,
    ComponentModule,
  ],
  declarations: [MyAdsPage]
})
export class MyAdsPageModule {}
