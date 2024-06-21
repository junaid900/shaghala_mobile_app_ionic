import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComapnyDetailPageRoutingModule } from './comapny-detail-routing.module';

import { ComapnyDetailPage } from './comapny-detail.page';
import { ComponentModule } from '../component/component.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComapnyDetailPageRoutingModule,
    ComponentModule,
    TranslateModule
  ],
  declarations: [ComapnyDetailPage]
})
export class ComapnyDetailPageModule {}
