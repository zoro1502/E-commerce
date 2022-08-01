import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() currentRate:any;
  @Input() canRating:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
