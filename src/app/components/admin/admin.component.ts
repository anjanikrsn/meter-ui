import { Component, OnInit } from '@angular/core';
import { ReadingsService } from '../../services/readings.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public readings;
  constructor(private readingService : ReadingsService) { }

  ngOnInit(): void {
    this.getReadings();
  }


  getReadings() {
    this.readingService.getReadings().subscribe (
      data => { this.readings = data },
      err => console.error(err),
      () => console.log('Readings Loaded')
    );
  }

}
