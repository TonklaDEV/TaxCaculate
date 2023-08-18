import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {
  currentYear: number = new Date().getFullYear(); // ปีปัจจุบัน
  selectedYear: string = this.currentYear.toString(); // ปีที่เลือก (ค่าเริ่มต้นเป็นปีปัจจุบัน)
  
  years: Array<string> = [];
  @Output() yearChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    for (let year = 2020; year <= this.currentYear; year++) {
      this.years.push(year.toString());
    }
    let currentYear = this.years[this.years.length - 1]
    
    this.yearChange.emit(currentYear)
  }

  emitYearChange() {
    if (this.selectedYear !== "") {
      this.yearChange.emit(this.selectedYear);
    }
  }
}
