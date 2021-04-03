import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

let token = sessionStorage.getItem('token');
const httpOptions = {
  headers : new HttpHeaders(
            { 
              'Content-Type' : 'application/json',
              'Authorization' : token
            }
            )
};

@Injectable({
  providedIn: 'root'
})
export class ReadingsService {

  constructor(private http:HttpClient) { }

  getReadings() {
    return this.http.get('/server/api/v1/readings', httpOptions);
  }

  getReading(id : string) {
    return this.http.get('/server/api/v1/readings/'+id, httpOptions)
  }

  createReading(meter){
    let body = JSON.stringify(meter);
    return this.http.post('/server/api/v1/readings', body, httpOptions);
  }

  getStationList() {
    return this.http.get('/server/api/v1/stations', httpOptions);
  }

  getQuarterList() {
    return this.http.get('/server/api/v1/quarters', httpOptions);
  }

  getStatementList() {
    return this.http.get('/server/api/v1/statements');
  }

  //for ems meter
  getEMSList() {
    return this.http.get('/server/api/v1/ems', httpOptions);
  }

  getEMSReadings(ems) {
    return this.http.get('/server/api/v1/emsreadings/'+ems.emsNumber, httpOptions);
  }
}
