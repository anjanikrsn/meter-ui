import { Component, OnInit } from '@angular/core';
import { ReadingsService } from '../../services/readings.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
  public statements;
  constructor(private readingService : ReadingsService) { }

  ngOnInit(): void {
    this.getStatements();
  }

  getStatements() {
    this.readingService.getStatementList().subscribe (
      data => { this.statements = data },
      err => console.error(err),
      () => console.log('Readings Loaded')
    );
  }
}

