import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerListPageRoutingModule } from './worker-list-routing.module';

import { WorkerListPage } from './worker-list.page';
import { TranslateModule } from '@ngx-translate/core';
import { EmptyLayoutComponent } from '../empty-layout/empty-layout.component';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkerListPageRoutingModule,
    TranslateModule,
    ComponentModule
  ],
  declarations: [WorkerListPage]
})
export class WorkerListPageModule {}
