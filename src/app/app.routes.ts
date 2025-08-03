import { Routes } from '@angular/router';
import { ActivityForm } from './activity-form/activity-form';

export const routes: Routes = [
  { path: 'activity-form', component: ActivityForm },
  { path: '', redirectTo: 'activity-form', pathMatch: 'full' }
];
