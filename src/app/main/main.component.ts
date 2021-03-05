import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  template: `<navbar></navbar>
    <div id="main">
      <router-outlet></router-outlet>
    </div>`,
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
