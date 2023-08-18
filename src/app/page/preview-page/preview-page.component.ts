import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxData } from 'src/app/tax-data';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss']
})
export class PreviewPageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  taxData: TaxData = {
    fillingType: '',
    month: '',
    year: '',
    saleAmount: 0,
    taxAmount: 0,
    surcharge: 0,
    penalty: 0,
    totalAmount: 0
  }

  ngOnInit(): void {
    const fillingType = this.route.snapshot.queryParamMap.get('fillingType') || '';
    const month = this.route.snapshot.queryParamMap.get('month') || '';
    const year = this.route.snapshot.queryParamMap.get('year') || '';
    const saleAmount = this.route.snapshot.queryParamMap.get('saleAmount') || 0;
    const taxAmount = this.route.snapshot.queryParamMap.get('taxAmount') || 0;
    const surcharge = this.route.snapshot.queryParamMap.get('surcharge') || 0;
    const penalty = this.route.snapshot.queryParamMap.get('penalty') || 0;
    const totalAmount = this.route.snapshot.queryParamMap.get('totalAmount') || 0;

    this.taxData.fillingType = fillingType
    this.taxData.month = month
    this.taxData.year = year
    this.taxData.saleAmount = Number(saleAmount)
    this.taxData.taxAmount = Number(taxAmount)
    this.taxData.penalty = Number(penalty)
    this.taxData.surcharge = Number(surcharge)
    this.taxData.totalAmount = Number(totalAmount)

    console.log(this.taxData);


  }

  createTaxDataJsonMessage(): string {
    const jsonMessage = JSON.stringify(this.taxData);
    return jsonMessage;
  }
  

  formatNumber(value: number): string {
    const formattedValue = value.toLocaleString('en-US', {
      minimumFractionDigits: 2
    });
    return formattedValue;
  }

}
