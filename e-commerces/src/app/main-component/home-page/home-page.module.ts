import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './../../item-component/product/product.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductModule

  ],
  exports:[
    HomePageComponent
  ]
})
export class HomePageModule { }
