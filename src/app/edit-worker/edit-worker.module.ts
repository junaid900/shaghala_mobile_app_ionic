import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditWorkerPageRoutingModule } from './edit-worker-routing.module';

import { EditWorkerPage } from './edit-worker.page';
import { TranslateModule } from '@ngx-translate/core';
import { MjpipesPipe } from '../mjpipes.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditWorkerPageRoutingModule,
    TranslateModule,
    // MjpipesPipe,
  ],
  declarations: [EditWorkerPage]
})
export class EditWorkerPageModule {}
