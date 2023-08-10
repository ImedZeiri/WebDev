import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  slides = [
    { image: './assets/img/photos/about21.jpg', srcset: './assets/img/photos/about21@2x.jpg 2x' },
    { image: './assets/img/photos/about22.jpg', srcset: './assets/img/photos/about22@2x.jpg 2x' },
    { image: './assets/img/photos/about23.jpg', srcset: './assets/img/photos/about23@2x.jpg 2x' },
  ];

  carouselOptions = {
    loop: true,
    nav: true,
    margin: 5,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
