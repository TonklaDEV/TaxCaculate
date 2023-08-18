import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {
  months: Array<string> = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
  ];

  currentMonthIndex: number = new Date().getMonth();
  selectedMonth: string = this.months[this.currentMonthIndex];

  @Output() monthChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.monthChange.emit(this.selectedMonth);
  }

  emitMonthChange() {
    this.monthChange.emit(this.selectedMonth);
  }
}
