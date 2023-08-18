import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPageComponent } from './page/input-page/input-page.component';
import { PreviewPageComponent } from './page/preview-page/preview-page.component';


const routes: Routes = [
  {
    path: 'input-page',
    component: InputPageComponent
  },
  {
    path: 'preview-page',
    component: PreviewPageComponent
  },
  {
    path: '', redirectTo: '/input-page', pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
