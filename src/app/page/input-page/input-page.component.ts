import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { TaxData } from 'src/app/tax-data';


@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent implements OnInit {


  selectedType: string = '0';
  faQuestionCircle = faQuestionCircle;
  taxAmount: string = "";
  taxAmoutForSurCharge: string = "";
  surCharge: string = "";
  PENALTY: string = "";
  filingType: String = "";
  year: string = "";
  total: number = 0;

  taxData: TaxData = {
    fillingType: '',
    month: '',
    year: '',
    saleAmount: 0,
    taxAmount: 0,
    surcharge: 0,
    penalty: 0,
    totalAmount: 0
  };

  getSaleAmount(saleAmount: string) {
    this.taxData.saleAmount = Number(saleAmount)
  }

  getMonth(month: string) {
    this.taxData.month = month;
    console.log(month);

  }

  getYear(year: string) {
    this.taxData.year = year;
    console.log(this.taxData.year);

  }

  selectTypeName(selected: string) {
    switch (selected) {
      case "0":
        this.taxData.fillingType = "Ordinary"
        break;
      case "1":
        this.taxData.fillingType = "Additional"
        break
    }
  }
  // รับ Event จาก Component app-filing-type
  onFilingTypeChange(selectedType: string) {
    this.selectedType = selectedType;
    console.log('Selected Type:', this.selectedType);
  }

  getTaxAmount(taxAmount: string) {
    this.taxAmount = taxAmount;
  }

  getTaxAmountForCharge(taxAmount: any) {
    this.taxAmoutForSurCharge = taxAmount;
  }

  getSurCharge(surCharge: string) {
    this.surCharge = surCharge;
  }

  getPenalty(penalty: string) {
    this.PENALTY = penalty;
  }

  makeData() {
    this.selectTypeName(this.selectedType)
    if (this.selectedType === "0") {
      this.taxData.taxAmount = Number(this.taxAmoutForSurCharge);
      this.taxData.totalAmount = Number(this.taxAmoutForSurCharge)
    }
    else {
      this.taxData.penalty = Number(this.PENALTY);
      this.taxData.taxAmount = Number(this.taxAmount);
      this.taxData.surcharge = Number(this.delComma(this.surCharge));
      this.taxData.totalAmount = Number(this.total);
    }
  }

  delComma(str: string) : Number{
    let num:number = 0 ;
    num = Number(str.replace(/,/g, ''))
    return num;
    
  }

  sendData() {
    this.makeData();
    console.log(this.taxData);

    const params: NavigationExtras = {
      queryParams : this.taxData
    }

    if (
      this.taxData.fillingType === '' ||
      this.taxData.month === '' ||
      this.taxData.year === '' ||
      this.taxData.saleAmount === 0
    ) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else {
      this.router.navigate(['/preview-page'], params);
    }
    
  }

  getTotal(total: number) {
    this.total = Number(total)
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
