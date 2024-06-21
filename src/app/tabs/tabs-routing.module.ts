import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../worker/worker.module').then(m => m.WorkerPageModule)
      },
      {
        path: 'tab4',
        data:{type:'company'},
        loadChildren: () => import('../worker/worker.module').then(m => m.WorkerPageModule)
        // loadChildren: () => import('../company-list/company-list.module').then(m => m.CompanyListPageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../notification-list/notification-list.module').then(m => m.NotificationListPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
