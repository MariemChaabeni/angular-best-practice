import { Component, OnInit } from '@angular/core';
import { loginAnimation } from 'src/app/core/animations';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [loginAnimation],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
