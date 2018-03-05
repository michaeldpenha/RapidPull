import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule }     from './pages/login/login.module';
import{ PageNotFoundModule } from './pages/page-not-found/page-not-found.module';
import{ PullManagerModule } from './pages/pull-manager/pull-manager.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    PullManagerModule,
    PageNotFoundModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(router: Router) {
    
  }
}
