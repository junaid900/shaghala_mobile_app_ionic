import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplainCenterPage } from './complain-center.page';

const routes: Routes = [
  {
    path: '',
    component: ComplainCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplainCenterPageRoutingModule {}
