import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerPageRoutingModule } from './worker-routing.module';

import { WorkerPage } from './worker.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkerPageRoutingModule,
    TranslateModule,
    ComponentModule
  ],
  declarations: [WorkerPage]
})
export class WorkerPageModule {}
