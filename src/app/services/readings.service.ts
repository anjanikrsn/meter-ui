import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ReadingsService {

  constructor(private http:HttpClient) { }

  getReadings() {
    return this.http.get('/server/api/v1/readings');
  }

  getReading(id : string) {
    return this.http.get('/server/api/v1/readings/'+id)
  }

  createReading(meter){
    let body = JSON.stringify(meter);
    return this.http.post('/server/api/v1/readings', body, httpOptions);
  }

  getStationList() {
    return this.http.get('/server/api/v1/stations');
  }

  getQuarterList() {
    return this.http.get('/server/api/v1/quarters');
  }

  getStatementList() {
    return this.http.get('/server/api/v1/statements');
  }
}
