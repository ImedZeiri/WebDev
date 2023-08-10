import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  counterData = [
    { count: 7518, label: 'Completed Projects' },
    { count: 3472, label: 'Happy Customers' },
    { count: 2184, label: 'Expert Employees' },
    { count: 4523, label: 'Awards Won' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
