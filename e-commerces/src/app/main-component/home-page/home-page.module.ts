import { ProductModule } from './../../item-component/product/product.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    ProductModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomePageModule { }
