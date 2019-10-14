import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { ValuePassingService } from '../services/value-passing.service';
import { Router } from '@angular/router';
import { HttpRequestService } from '../services/http-request.service';
import * as moment from 'moment';
import { Country } from '../models/country';
import { Registrant } from '../models/registrant';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  regForm: FormGroup;
  countryArray = [];
  constructor(private ValuePassSvc: ValuePassingService, private router: Router,
    private fb: FormBuilder, private GetCountrySvc: HttpRequestService) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: ['', Validators.required],
      phoneNo: ['', [Validators.required, Validators.pattern(/^(\(?\+?[0-9]*\)?)?[0-9\- \(\)]*$/)]],
      gender: ['', Validators.required],
      dob: ['', [Validators.required, this.ageReqValidator(18)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#])[A-Za-z\d@$#]{8,}$/)]],
      country: ['', Validators.required],
    })

    this.GetCountrySvc.getCountryList()
      .then(result => { this.countryArray = result; })
      .catch(error => { console.log(error) })
  }

  addRegistrant() {
    const values = this.regForm.value;
    const registrantObj: Registrant = {
      name: values.name,
      phoneNo: values.phoneNo,
      gender: values.gender === 'male' ? 'Male' : 'Female',
      dob: moment(values.dob).format("dddd, MMMM Do YYYY"),
      address: values.address,
      email: values.email,
      country: values.country,
      password: values.password,
    }
    this.ValuePassSvc.saveValuesInService(registrantObj);
    this.router.navigate(['confirmation']);
  }

  ageReqValidator(ageRequirement: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const birthday: moment.Moment = moment(control.value);
      const underAge: boolean = moment().diff(birthday, 'years') < ageRequirement;
      return underAge ? { 'ageUnderReq': { value: birthday } } : null;
    };
  }

}
