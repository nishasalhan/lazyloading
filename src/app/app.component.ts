import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1 style="text-align: center;width: 100%;margin: 23px 3px 49px 11px;">Lazy loading demo</h1>
      <style>a {
        text-decoration: none;
        outline: 0;
        margin: 50px;
        background: #3a8ae2;
        padding: 14px;
        color: white;
        border-radius: 4px;
      }
      .innerContent{    padding: 50px;
        border: 1px solid;
        margin: 50px 0px 0px 50px;}</style>
      <nav class="app-nav">
        <div class="wrapper">
          <a routerLink="dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="profile" routerLinkActive="active">Profile</a>
          <a routerLink="settings" routerLinkActive="active">Settings</a>
          <a routerLink="reports" routerLinkActive="active">Reports</a>
        </div>
      </nav>
      <div class="wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {}
