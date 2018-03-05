import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PullManagerRoutingModule} from './pull-manager-routing.module';
import { PullManagerDashboardComponent } from './component/childcomponents/pull-manager-dashboard/pull-manager-dashboard.component';
import { PullManagerCreatePullComponent } from './component/childcomponents/pull-manager-create-pull/pull-manager-create-pull.component';
import { PullManagerPullConfirmationComponent } from './component/childcomponents/pull-manager-pull-confirmation/pull-manager-pull-confirmation.component';
import { PullManagerComponent } from './component/pull-manager.component';

@NgModule({
  imports: [
    CommonModule,
    PullManagerRoutingModule
  ],
  declarations: [PullManagerDashboardComponent, PullManagerCreatePullComponent, PullManagerPullConfirmationComponent, PullManagerComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PullManagerModule { }
