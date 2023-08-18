import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.scss']
})
export class PenaltyComponent implements OnInit {
  penalty: string = '200.00'; // ค่าคงที่ 200.00
  @Output() PENALTY = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.PENALTY.emit(this.penalty)
  }
}
