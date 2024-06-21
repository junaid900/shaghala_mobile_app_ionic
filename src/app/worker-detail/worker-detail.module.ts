import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerDetailPageRoutingModule } from './worker-detail-routing.module';

import { WorkerDetailPage } from './worker-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkerDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [WorkerDetailPage]
})
export class WorkerDetailPageModule {}
