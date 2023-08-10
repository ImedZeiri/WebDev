import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items = [
    {
      image: './assets/img/photos/b4.jpg',
      caption: 'Photo 1 Caption',
      title: 'Ligula tristique quis risus',
      content: 'Mauris convallis non ligula non interdum...',
      date: '14 Apr 2021',
      category: 'Coding'
    },
    {
      image: './assets/img/photos/b5.jpg',
      caption: 'Photo 2 Caption',
      title: 'Nullam id dolor elit id nibh',
      content: 'Mauris convallis non ligula non interdum...',
      date: '29 Mar 2021',
      category: 'Workspace'
    },
    {
      image: './assets/img/photos/b6.jpg',
      caption: 'Photo 3 Caption',
      title: 'Ultricies fusce porta elit',
      content: 'Mauris convallis non ligula non interdum...',
      date: '26 Feb 2021',
      category: 'Meeting'
    },
    {
      image: './assets/img/photos/b7.jpg',
      title: 'Morbi leo risus porta eget',
      caption: 'Photo 4 Caption',
      content: 'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '7 Jan 2021',
      category: 'Business Tips'
    },
    // Add more items here
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
