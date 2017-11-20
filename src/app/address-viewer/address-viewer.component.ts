import { Component, Input } from '@angular/core';

import { Address }          from '../address';
import { AddressService }   from '../address.service';

// Should probably attempt to draw in the Map js into typescript
//import * as mapDraw from '../../mapDraw.js';

@Component({
  selector: 'app-address-viewer',
  templateUrl: './address-viewer.component.html',
  styleUrls: ['./address-viewer.component.css']
})
export class AddressViewerComponent {
  @Input() addresses: Address[];

  oldAddressesLength: number;

  constructor(
    private AddressService: AddressService
  ) {}

  getAddresses(addressesID: number): void {
    this.AddressService
      .getAddresses(addressesID)
      .then(addresses => {
        this.addresses = addresses;

        // Remove old points from Map
        var i:number;
        for (i = 0; i < this.oldAddressesLength; i++) {
          // Each point has the id of "i", so calling
          /** removeMarker(i) */
          //  should remove the points from the map
        }

        this.oldAddressesLength = addresses.length;

        // Add newPoints to Map
        i = 0;
        for (let address in addresses) {
          // Give each added point an interative id
          /** addMarker(i, "location", address.address) */
          //  should add the points to the map
          i++;
        }
      });
  }

  ngOnInit(): void {
    this.oldAddressesLength = 0;
    this.getAddresses(0);
  }
}
