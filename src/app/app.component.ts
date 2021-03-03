import { SplashScreenService } from './core/services/splash-screen.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-best-practice';
  constructor(private _splashScreenService: SplashScreenService) {}
}
