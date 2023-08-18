import { Component, Input,  Output, EventEmitter ,OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.scss']
})
export class SurchargeComponent implements OnChanges {
  @Input() taxAmount: string = ''; // จำนวนเงินภาษี
  @Output() surChargeOutput = new EventEmitter<string>();
  surcharge: string = ''; // ค่าปรับปรุง

  constructor() { }
  ngOnChanges(changes: SimpleChanges){
    if(changes.taxAmount){
      this.calculateSurcharge()
    }
  }

  calculateSurcharge() {
    const numericTaxAmount = parseFloat(this.taxAmount.replace(/,/g, '')) || 0;
    const surchargeValue = (numericTaxAmount * 0.1).toFixed(2);
    this.surcharge = parseFloat(surchargeValue).toLocaleString('en-US');
    this.surChargeOutput.emit(this.surcharge);
  }
}
