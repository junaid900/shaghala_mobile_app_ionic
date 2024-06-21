import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritPageRoutingModule } from './favourit-routing.module';

import { FavouritPage } from './favourit.page';
import { TranslateModule } from '@ngx-translate/core';
import { EmptyLayoutComponent } from '../empty-layout/empty-layout.component';
import { LoadingComponent } from '../loading/loading.component';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritPageRoutingModule,
    TranslateModule,
    ComponentModule,
    
  ],
  declarations: [
    FavouritPage,
  ],
  
})
export class FavouritPageModule {}
