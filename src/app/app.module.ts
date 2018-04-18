import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// containers
import { AppComponent } from './app.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
  { path: 'profile', loadChildren: '../profile/profile.module#ProfileModule' },
  { path: 'settings', loadChildren: '../settings/settings.module#SettingsModule' },
  { path: 'reports', loadChildren: '../reports/reports.module#ReportsModule' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
