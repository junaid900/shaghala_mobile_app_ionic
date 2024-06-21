import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvanceFilterPageRoutingModule } from './advance-filter-routing.module';

import { AdvanceFilterPage } from './advance-filter.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvanceFilterPageRoutingModule,
    TranslateModule
  ],
  declarations: [AdvanceFilterPage]
})
export class AdvanceFilterPageModule {}
