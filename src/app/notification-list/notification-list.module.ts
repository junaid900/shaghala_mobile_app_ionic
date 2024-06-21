import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationListPageRoutingModule } from './notification-list-routing.module';

import { NotificationListPage } from './notification-list.page';
import {ComponentModule} from '../component/component.module'
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationListPageRoutingModule,
    ComponentModule,
    TranslateModule,
  ],
  declarations: [NotificationListPage]
})
export class NotificationListPageModule {}
