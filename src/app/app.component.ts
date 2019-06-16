import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-example';
  routs = [{ linkName: 'Home', url: 'home' }, { linkName: 'Settings', url: 'settings' }];
  homeRoute = 'home';
  settingsRoute = 'settings';
}
