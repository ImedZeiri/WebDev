import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.css']
})
export class PricingCardComponent implements OnInit {
  @Input() priceShow: number | string = 0;
  @Input() priceHide: number | string = 0;
  @Input() duration: string = 'month';
  @Input() title: string = '';
  @Input() features: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
