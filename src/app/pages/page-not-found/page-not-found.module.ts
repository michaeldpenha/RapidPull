import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './component/page-not-found.component';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { SharedComponents } from '../../shared/components/index';

@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ],
  declarations: [PageNotFoundComponent,SharedComponents],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PageNotFoundModule { }
