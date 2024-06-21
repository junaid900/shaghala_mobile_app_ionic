import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { EmptyLayoutComponent } from '../empty-layout/empty-layout.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    LoadingComponent,
    EmptyLayoutComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports:[LoadingComponent,EmptyLayoutComponent,TranslateModule],
  
})
export class ComponentModule { }
