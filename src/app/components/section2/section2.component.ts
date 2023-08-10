import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
  items: any[] = [
    {
      imageSrc: './assets/img/photos/b4.jpg',
      link: './blog-post.html',
      title: 'Ligula tristique quis risus',
      content: 'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '14 Apr 2021',
      category: 'Coding'
    },
    {
      imageSrc: './assets/img/photos/b5.jpg',
      link: './blog-post.html',
      title: 'Nullam id dolor elit id nibh',
      content: 'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '29 Mar 2021',
      category: 'Workspace'
    },
    {
      imageSrc: './assets/img/photos/b6.jpg',
      link: './blog-post.html',
      title: 'Ultricies fusce porta elit',
      content: 'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '26 Feb 2021',
      category: 'Meeting'
    },
    {
      imageSrc: './assets/img/photos/b7.jpg',
      link: './blog-post.html',
      title: 'Morbi leo risus porta eget',
      content: 'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '7 Jan 2021',
      category: 'Business Tips'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
