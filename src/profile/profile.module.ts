import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { ProfileComponent } from './profile.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: ProfileComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule {}
