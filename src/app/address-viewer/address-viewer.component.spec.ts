import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { Address }          from '../address';
import { AddressService }   from '../address.service';
import { AddressViewerComponent } from './address-viewer.component';
import { AddressDetailComponent } from '../address-detail/address-detail.component';

describe('AddressViewerComponent', () => {
  let component: AddressViewerComponent;
  let fixture: ComponentFixture<AddressViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressService, AddressViewerComponent, AddressDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return addresses', () => {
    inject([AddressService], (addressService) => {

      addressService.getAddresses(1).then (addresses=> {
        expect(addresses.length).toBe(4);
      });
    });
  });
});
