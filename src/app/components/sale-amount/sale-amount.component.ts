import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.scss']
})
export class SaleAmountComponent implements OnInit {
  inputType: string = 'text';
  saleAmount: any; // มูลค่าขาย
  taxAmount: any; // ค่าภาษี
  @Output() taxAmountOutput = new EventEmitter<string>();
  @Output() saleAmountOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  calculateTaxAmount() {
    this.taxAmount = this.saleAmount * 0.07;
    this.taxAmountOutput.emit(parseFloat(this.taxAmount).toFixed(2))
    this.saleAmountOutput.emit(this.saleAmount)
  }

  onFocus() {
    this.inputType = 'number';
    this.saleAmount = parseFloat(this.saleAmount.replace(/,/g, ''));
  }
  

  onBlur() {
    this.calculateTaxAmount()
    this.inputType = 'text';
    this.saleAmount = this.formatNumber(this.saleAmount);
  }

  formatNumber(value: any): string {
    const formatted = new Intl.NumberFormat('en-US',{minimumFractionDigits: 2}).format(value);
    return formatted;
  }
  

  // onChangeModel() {
  //   this.calculateTaxAmount();
  // }

  
}
