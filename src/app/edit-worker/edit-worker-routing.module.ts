import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditWorkerPage } from './edit-worker.page';

const routes: Routes = [
  {
    path: '',
    component: EditWorkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditWorkerPageRoutingModule {}
