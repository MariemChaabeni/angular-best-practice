import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navItems: any = [
    {
      name: 'Functions Vs Pipes',
      path: 'pipes-functions',
    },
    {
      name: 'Subjects',
      path: 'subjects',
    },
    {
      name: 'Users',
      path: 'users',
    },
    // {
    //   name: 'Galery',
    //   path: 'galery',
    // },
    {
      name: 'FAQ',
      path: 'faq',
    },
  ];
}
