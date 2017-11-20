import { Component } from '@angular/core';

import { Address }                from './address';

@Component({
  selector: 'mapfit-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //private addresses: Address[] = addresses;
  private addresses: Address[];
  constructor(
  ) {}
}
