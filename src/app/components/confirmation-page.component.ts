import { Component, OnInit } from '@angular/core';
import { ValuePassingService } from '../services/value-passing.service';
import { Registrant } from '../models/registrant';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
  registrantObj: Registrant;
  registrantView = [];
  constructor(private GetRegistrantSvc: ValuePassingService) { }

  ngOnInit() {
    this.registrantObj = this.GetRegistrantSvc.retrieveValuesFromService();
  }

}
