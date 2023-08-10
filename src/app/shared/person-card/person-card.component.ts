import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
  teamMembers = [
    {
      avatar: './assets/img/avatars/t1.jpg',
      name: 'Coriss Ambady',
      role: 'Financial Analyst'
    },
    {
      avatar: './assets/img/avatars/t2.jpg',
      name: 'Cory Zamora',
      role: 'Marketing Specialist'
    },
    {
      avatar: './assets/img/avatars/t3.jpg',
      name: 'Nikolas Brooten',
      role: 'Sales Manager'
    },
    {
      avatar: './assets/img/avatars/t4.jpg',
      name: 'Jackie Sanders',
      role: 'Investment Planner'
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
