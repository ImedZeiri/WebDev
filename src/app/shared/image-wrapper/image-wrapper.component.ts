import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-wrapper',
  templateUrl: './image-wrapper.component.html',
  styleUrls: ['./image-wrapper.component.css']
})
export class ImageWrapperComponent implements OnInit {

  testimonials = [
    {
      quote: '“Vivamus sagittis lacus augue laoreet rutrum faucibus auctor vestibulum ligula porta felis, euismod semper cras justo odio consectetur.”',
      name: 'Coriss Ambady',
      role: 'Financial Analyst'
    },
    {
      quote: '“Vivamus sagittis lacus augue laoreet rutrum faucibus auctor vestibulum ligula porta felis, euismod semper cras justo odio consectetur.”',
      name: 'Cory Zamora',
      role: 'Marketing Specialist'
    },
    {
      quote: '“Vivamus sagittis lacus augue laoreet rutrum faucibus auctor vestibulum ligula porta felis, euismod semper cras justo odio consectetur.”',
      name: 'Nikolas Brooten',
      role: 'Sales Manager'
    }
    ];
  constructor() { }

  ngOnInit(): void {

  }

}
