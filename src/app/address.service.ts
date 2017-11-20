import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Address } from './address';

@Injectable()
export class AddressService {
  /* Example curl
  curl -XPOST -H 'Content-Type: application/json' https://api.mapfit.com/v1/geocode?api_key=591dccc4e499ca0001a4c6a41a2ed1be54804856508265221862231b -d '[
    {"building":true,"address":"119 W 24th St, New York, NY"},
    {"building":true,"address":"99 Margaret Corbin Dr, New York, NY"},
    {"building":true,"address":"1000 5th Ave, New York, NY"}
  ]'
  */

  private headers = new Headers({'Content-Type': 'application/json'});
  // URL to mapfit address api
  private addressUrl = 'https://api.mapfit.com/v1/geocode?api_key=591dccc4e499ca0001a4c6a41a2ed1be54804856508265221862231b';

  // As temporary, store the request addresses in an array
  private constAddresses = [
    [
      {"building":true,"address":"119 W 24th St, New York, NY"},
      {"building":true,"address":"99 Margaret Corbin Dr, New York, NY"},
      {"building":true,"address":"1000 5th Ave, New York, NY"}
    ],
    [
      {"building":true,"address":"118 w 42nd st, new york, ny"},
      {"building":true,"address":" stainway st, astoria, queens, ny"}
    ]
  ]


  constructor(private http: Http) { }

  getAddresses(addressesID: number): Promise<Address[]> {
    return this.http
       .post(this.addressUrl,
                  JSON.stringify(this.constAddresses[addressesID]),
                  {"headers": this.headers}
       )
       .toPromise()
       .then(response => response.json() as Address[])
       .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
