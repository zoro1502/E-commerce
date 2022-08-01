import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  tab_suggest = {
    for_you:true,
    coupon:false,
    sale:false,
    deal_hot:false,
    cheap:false,
    new:false,
    fashion:false,
    trending:false
  }
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(numb) {
    switch(numb) {
      case 1 : this.tab_suggest = {
                        for_you:true,
                        coupon:false,
                        sale:false,
                        deal_hot:false,
                        cheap:false,
                        new:false,
                        fashion:false,
                        trending:false
                      }
                break;
      case 2 : this.tab_suggest = {
                        for_you:false,
                        coupon:true,
                        sale:false,
                        deal_hot:false,
                        cheap:false,
                        new:false,
                        fashion:false,
                        trending:false
                      }
                break;
      case 3 : this.tab_suggest = {
                        for_you:false,
                        coupon:false,
                        sale:true,
                        deal_hot:false,
                        cheap:false,
                        new:false,
                        fashion:false,
                        trending:false
                      }
                break;
      case 4 : this.tab_suggest = {
                        for_you:false,
                        coupon:false,
                        sale:false,
                        deal_hot:true,
                        cheap:false,
                        new:false,
                        fashion:false,
                        trending:false
                      }
                break;
      case 5 : this.tab_suggest = {
                        for_you:false,
                        coupon:false,
                        sale:false,
                        deal_hot:false,
                        cheap:true,
                        new:false,
                        fashion:false,
                        trending:false
                      }
                break;
      case 6 : this.tab_suggest = {
                        for_you:false,
                        coupon:false,
                        sale:false,
                        deal_hot:false,
                        cheap:false,
                        new:true,
                        fashion:false,
                        trending:false
                      }
                break;
      case 7 : this.tab_suggest = {
                        for_you:false,
                        coupon:false,
                        sale:false,
                        deal_hot:false,
                        cheap:false,
                        new:false,
                        fashion:true,
                        trending:false
                      }
                break;
      case 8 : this.tab_suggest = {
                      for_you:false,
                      coupon:false,
                      sale:false,
                      deal_hot:false,
                      cheap:false,
                      new:false,
                      fashion:false,
                      trending:true
                    }
                break;
    }
  }
}
