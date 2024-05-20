import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { GerardComponent } from './app/gerard/gerard.component';

import 'zone.js';

@Component({
  selector: 'app-root',
  imports: [GerardComponent],
  standalone: true,
  template: `
    <app-gerard></app-gerard>
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
