import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { getUser } from '../services/session.helper';
import { AuthGuard } from '../services/user/auth.guard';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [{
      path: 'first',
      loadChildren: () => import('../tabs/tabs.module').then(e => e.TabsPageModule),
      canActivate: [AuthGuard]
    }],

  },
  {
    path: '',
    redirectTo: 'menu/first',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  } 
  // !getUser().type ?
  //   {
  //     path: '',
  //     redirectTo: 'login',
  //     pathMatch: 'full'
  //   }
  //   : getUser().type == '' ? {
  //     path: '',
  //     redirectTo: 'menu/first',
  //     pathMatch: 'full'
  //   } : {
  //     path: '',
  //     redirectTo: 'edit-account',
  //     pathMatch: 'full'
  //   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
