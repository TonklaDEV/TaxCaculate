import { Component, Input, OnChanges, Output, SimpleChanges,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.scss']
})
export class TotalAmountComponent implements OnChanges {
  @Input() taxAmount: string = ''; // จำนวนเงินภาษี
  @Input() surcharge: string = ''; // ค่าปรับปรุง
  @Input() penalty: string = ''; // ค่าคงที่ 200.00
  totalAmount: string = ''; // รวมยอดเงิน
  @Output() totalAmountOutput = new EventEmitter<number>()

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.taxAmount || changes.surcharge) {
      this.calculateTotalAmount()
    }
  }

  calculateTotalAmount() {
    const numericTaxAmount = parseFloat(this.taxAmount.replace(/,/g, '')) || 0;
    const numericSurcharge = parseFloat(this.surcharge.replace(/,/g, '')) || 0;
    const numericPenalty = parseFloat(this.penalty.replace(/,/g, '')) || 0;
    
    const totalValue = (numericTaxAmount + numericSurcharge + numericPenalty).toFixed(2);
    this.totalAmount = parseFloat(totalValue).toLocaleString('en-US', { maximumFractionDigits: 2 });
    this.totalAmountOutput.emit(Number(totalValue));
  }
}
