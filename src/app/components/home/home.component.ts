import { Component, OnInit } from '@angular/core';
import { ReadingsService } from 'src/app/services/readings.service';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form : FormGroup;
  validMessage : string = "";
  public stations;
  public quarters;
  public allQuarterList: any[];
  public readings;
  public ems;
  public allEMSList;
  constructor(private readingService : ReadingsService) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
     // readingDate : new FormControl('', Validators.required),
      //  stationName : new FormControl('', Validators.required),
      //  quarterNumber : new FormControl('', Validators.required),
      //  presReading : new FormControl('', Validators.required),
        emsNumber : new FormControl('', Validators.required),
    });

    this.getStationList();
    this.getQuarterList();
    this.getEMSList();
  }

  getStationList() {
    this.readingService.getStationList().subscribe (
      data => { this.stations = data },
      err => console.error(err),
      () => console.log('Stations loaded')
    );
  }

  getQuarterList() {
    this.readingService.getQuarterList().subscribe (
      data => { this.quarters = data },
      err => console.error(err),
      () => console.log('Stations loaded')
    );
  }

  submitReading() {
    if(this.form.valid){
      this.validMessage = "Successfully submitted";
      console.log("val =", this.form.value);
      var json = (this.form.value);
      var date = json.readingDate;
      json.readingDate = date.year + "-0" + date.month + "-" + date.day;
      console.log("date =", json);
      this.readingService.createReading(this.form.value).subscribe(
        data => {
          this.form.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )

    } else {
      this.validMessage = "Please fill out the form beform submitting";
    }
  }

  public stationChange( $event: any ) {
    console.log("obj =", $event);
    var itm = $event.srcElement.value;
    console.log("itm = ", itm);
    //this.allQuarterList = this.quarters.filter( _stationCode => _stationCode.belongsTo( $event));
    //var filteredArray = this.quarters.filter(function(itm){
    //  return empIds.indexOf(itm.empid) > -1;
    //});
    var recordsSorted = []

    //this.quarters.forEach(function(itm) {
    //recordsSorted.push(records.filter(function(o) {
    //    return o.empid === e;
    //}));
    var data = this.quarters;
    for(var i = 0; i < data.length; i++) {
      var obj = data[i];
      console.log("station code = ", obj.stationCode);
      if(obj.stationCode === itm) {
        console.log("matched", obj.quarterNo);
        recordsSorted = obj.quarterNo;
        break;
      }
    }
      console.log("recordsSorted = " + recordsSorted);
      this.allQuarterList = recordsSorted;
  

  }

  getEMSList() {
    this.readingService.getEMSList().subscribe (
      data => { this.ems = data },
      err => console.error(err),
      () => console.log('EMS loaded')
    );
  }

  searchReading() {
    if(this.form.valid){
      this.validMessage = "Loading... ";
      console.log("ems = ",this.form.value);
      this.readingService.getEMSReadings(this.form.value).subscribe (
        data => { this.readings = data ; this.validMessage = "";},
        err => console.error(err),
        () => console.log('EMS loaded')
      );
    }
    else {
      this.validMessage = "Please fill out the form beform submitting";
    }
  }
}
