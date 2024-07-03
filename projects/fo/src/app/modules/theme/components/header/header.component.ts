import { Component, Input } from '@angular/core';
import { MenuItems } from '../../models/menu-item';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input({ required: true})
  menuItems!: MenuItems;

}
