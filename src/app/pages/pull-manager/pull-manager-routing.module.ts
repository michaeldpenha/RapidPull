import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PullManagerComponent } from './component/pull-manager.component';
import { PullManagerDashboardComponent } from './component/childcomponents/pull-manager-dashboard/pull-manager-dashboard.component';
import { PullManagerPullConfirmationComponent } from './component/childcomponents/pull-manager-pull-confirmation/pull-manager-pull-confirmation.component';
import { PullManagerCreatePullComponent } from './component/childcomponents/pull-manager-create-pull/pull-manager-create-pull.component';

const pullManagerRoutes: Routes = [
  {
    path : 'dashboard',
    component : PullManagerComponent,
    children : [{
      path : '',
      component : PullManagerDashboardComponent
    },{
      path : 'createpull',
      component : PullManagerCreatePullComponent
    },{
      path : 'editpull/:id',
      component : PullManagerCreatePullComponent
    },{
      path : 'pullconfirmation',
      component : PullManagerPullConfirmationComponent
    },{
      path : 'pullsuccess',
      component : PullManagerDashboardComponent
    },{
      path : 'pullerror',
      component : PullManagerDashboardComponent
    }]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(pullManagerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PullManagerRoutingModule { }
