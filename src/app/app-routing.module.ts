import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => { console.log('home here'); return import('./menu/menu.module').then(m => m.MenuPageModule) }

    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'worker-detail',
    loadChildren: () => import('./worker-detail/worker-detail.module').then(m => m.WorkerDetailPageModule)
  },
  {
    path: 'add-worker',
    loadChildren: () => import('./add-worker/add-worker.module').then(m => m.AddWorkerPageModule)
  },
  {
    path: 'edit-account',
    loadChildren: () => import('./edit-account/edit-account.module').then(m => m.EditAccountPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingPageModule)
  },
  {
    path: 'complain-center',
    loadChildren: () => import('./complain-center/complain-center.module').then(m => m.ComplainCenterPageModule)
  },
  {
    path: 'favourit',
    loadChildren: () => import('./favourit/favourit.module').then(m => m.FavouritPageModule)
  },
  {
    path: 'advance-filter',
    loadChildren: () => import('./advance-filter/advance-filter.module').then(m => m.AdvanceFilterPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'check-email',
    loadChildren: () => import('./check-email/check-email.module').then(m => m.CheckEmailPageModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./new-password/new-password.module').then(m => m.NewPasswordPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then(m => m.OtpPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'edit-worker',
    loadChildren: () => import('./edit-worker/edit-worker.module').then(m => m.EditWorkerPageModule)
  },
  {
    path: 'worker',
    loadChildren: () => import('./worker/worker.module').then(m => m.WorkerPageModule)
  },
  {
    path: 'my-ads',
    loadChildren: () => import('./my-ads/my-ads.module').then(m => m.MyAdsPageModule)
  },
  {
    path: 'worker-list',
    loadChildren: () => import('./worker-list/worker-list.module').then(m => m.WorkerListPageModule)
  },
  {
    path: 'card-payment',
    loadChildren: () => import('./card-payment/card-payment.module').then(m => m.CardPaymentPageModule)
  },
  {
    path: 'paypal-checkout',
    loadChildren: () => import('./paypal-checkout/paypal-checkout.module').then(m => m.PaypalCheckoutPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesPageModule)
  },
  {
    path: 'fatora-checkout',
    loadChildren: () => import('./fatora-checkout/fatora-checkout.module').then(m => m.FatoraCheckoutPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsPageModule)
  },
  {
    path: 'company-list',
    loadChildren: () => import('./company-list/company-list.module').then( m => m.CompanyListPageModule)
  },
  {
    path: 'comapny-detail',
    loadChildren: () => import('./comapny-detail/comapny-detail.module').then( m => m.ComapnyDetailPageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'notification-list',
    loadChildren: () => import('./notification-list/notification-list.module').then( m => m.NotificationListPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
