import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { testReducers } from './store/test/test.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TestEffect } from './store/test/test.effect';
import { Storage, StoragePlugin } from '@capacitor/storage';
import { Capacitor } from '@capacitor/core';
import { userReducer } from './store/user/user.reducer';
import { GlobalProvider } from './services/global.provider';
import { MjpipesPipe } from './mjpipes.pipe';
import { environment } from '../environments/environment';
// import {GooglePlus} from 'cordova'
import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';
import { Facebook } from '@awesome-cordova-plugins/facebook/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { LoadingComponent } from './loading/loading.component';
import { EmptyLayoutComponent } from './empty-layout/empty-layout.component';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/local/', '.json');
}
@NgModule({
  declarations: [AppComponent, MjpipesPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({
    
  }), AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
    }),
    HttpClientModule,
    StoreModule.forRoot({
      tests: testReducers,
      users: userReducer,
    }),
    EffectsModule.forRoot([
      TestEffect,
    ]),

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpClient,
    GlobalProvider, GooglePlus, Facebook, CallNumber,Keyboard,InAppBrowser],
  bootstrap: [AppComponent],
})
export class AppModule { }
