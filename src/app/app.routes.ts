import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { AppRoutes } from './core/enums/app-routes.enums';
import { AboutUsComponent } from './modules/about-us/component/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: AppRoutes.aboutUs, component: AboutUsComponent },
];
