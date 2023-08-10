import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-quotes',
  templateUrl: './carousel-quotes.component.html',
  styleUrls: ['./carousel-quotes.component.css']
})
export class CarouselQuotesComponent implements OnInit {
  @Input() quote: string='';
  @Input() name: string='';
  @Input() role: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
