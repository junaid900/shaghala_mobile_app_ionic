import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComapnyDetailPage } from './comapny-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ComapnyDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComapnyDetailPageRoutingModule {}
