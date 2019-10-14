import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }

  getCountryList(): Promise<any> {
    return (this.http.get<any>('https://cors-anywhere.herokuapp.com/http://ec2-13-229-233-153.ap-southeast-1.compute.amazonaws.com:3000/countries', 
    /*
    {
      headers: new HttpHeaders({
        'X-testing': 'testing'
      })
    }
    */
    ).toPromise())
  }

}
