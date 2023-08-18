import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilingTypeComponent } from './components/filing-type/filing-type.component';
import { MonthComponent } from './components/month/month.component';
import { YearComponent } from './components/year/year.component';
import { SaleAmountComponent } from './components/sale-amount/sale-amount.component';
import { TaxAmountComponent } from './components/tax-amount/tax-amount.component';
import { SurchargeComponent } from './components/surcharge/surcharge.component';
import { PenaltyComponent } from './components/penalty/penalty.component';
import { TotalAmountComponent } from './components/total-amount/total-amount.component';
import { InputPageComponent } from './page/input-page/input-page.component';
import { PreviewPageComponent } from './page/preview-page/preview-page.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { th_TH } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import th from '@angular/common/locales/th';
import { HttpClientModule } from '@angular/common/http';
import { NzStepsModule } from 'ng-zorro-antd/steps';


registerLocaleData(th);


@NgModule({
  declarations: [
    AppComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
    InputPageComponent,
    PreviewPageComponent
  ],
  imports: [
    NzStepsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: th_TH }],
  bootstrap: [AppComponent]
})
export class AppModule { }
