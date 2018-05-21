import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarContainerComponent } from './car-container/car-container.component';
import { HttpModule } from '@angular/http';

const ENABLE_ROUTE_TRACING = true;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarDetailComponent,
    CarContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true, enableTracing: ENABLE_ROUTE_TRACING}),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
