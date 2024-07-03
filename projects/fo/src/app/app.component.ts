import { Component } from '@angular/core';
import { MenuItems } from './modules/theme/models/menu-item';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  menuItems: MenuItems = [
    { path: '/home', label: 'Home'},
    { path: '/get-started', label: 'GetStarted'},
    { path: '/products', label: 'Products'}
  ];

}
