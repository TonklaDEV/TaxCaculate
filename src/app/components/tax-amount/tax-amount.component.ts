import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.scss']
})
export class TaxAmountComponent implements OnChanges {
  @Input() taxAmount: string = ''; // จำนวนเงินภาษี
  @Output() taxAmoutOutput = new EventEmitter<string>();
  readonly MAX_TAX_ADJUSTMENT = 20.00;
  MIN = 0;
  MAX = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if(changes.taxAmount){
      this.formatCurrency({ target: { value: this.taxAmount } });
    }
  }

  formatCurrency(event: any) {
    console.log(event.target.value, typeof (event.target.value));

    let newValue = event.target.value.replace(/,/g, '');
    newValue = parseFloat(newValue);
    this.taxAmount = newValue.toFixed(2);
    this.taxAmoutOutput.emit(this.taxAmount);
  }

  onFocus() {
    this.formatCurrency({ target: { value: this.taxAmount } });
    this.MAX = parseFloat(this.taxAmount) + this.MAX_TAX_ADJUSTMENT
    this.MIN = parseFloat(this.taxAmount) - this.MAX_TAX_ADJUSTMENT
  }
  

}
