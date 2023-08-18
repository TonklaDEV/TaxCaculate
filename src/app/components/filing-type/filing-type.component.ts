import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.scss']
})
export class FilingTypeComponent implements OnInit {
  selectedType: string = '0'; // เริ่มต้นเป็น '0'
  faQuestionCircle = faQuestionCircle;

  @Output() filingTypeChange = new EventEmitter<string>(); // Output Property

  constructor() { }

  ngOnInit(): void {
    this.emitFilingType(); // ส่งค่าเริ่มต้นไปให้ Component ที่ใช้
  }

  // เมื่อเลือก Radio ให้ส่งค่า selectedType ไปให้ Component ที่ใช้
  emitFilingType() {
    this.filingTypeChange.emit(this.selectedType);
  }

  // เมื่อคลิกปุ่ม Radio ให้แสดงค่าที่เลือกผ่าน console.log
  onRadioClick(event: Event) {
    const selectedRadio = event.target as HTMLInputElement;
    console.log('Selected Radio Value:', selectedRadio.value);
    this.selectedType = selectedRadio.value;
    this.emitFilingType();
  }
  
}
