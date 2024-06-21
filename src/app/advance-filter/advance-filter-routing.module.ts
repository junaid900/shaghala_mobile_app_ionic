import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvanceFilterPage } from './advance-filter.page';

const routes: Routes = [
  {
    path: '',
    component: AdvanceFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvanceFilterPageRoutingModule {}
