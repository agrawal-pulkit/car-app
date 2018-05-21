import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

export const ROUTES: Routes = [

  { path: 'car/:id', component: CarDetailComponent },

];
