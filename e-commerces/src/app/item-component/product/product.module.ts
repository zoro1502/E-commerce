import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { StarRatingComponent } from './star-rating/star-rating.component';



@NgModule({
  declarations: [ProductItemComponent, StarRatingComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ProductItemComponent,
    StarRatingComponent
  ]
})
export class ProductModule { }
