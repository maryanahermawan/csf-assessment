import { Injectable } from '@angular/core';
import { Registrant } from '../models/registrant';

@Injectable({
  providedIn: 'root'
})
export class ValuePassingService {
  regObject: Registrant;

  constructor() { }

  saveValuesInService(regObj: Registrant) {
    this.regObject = regObj;
  }
  retrieveValuesFromService() {
    return this.regObject;
  }
}
