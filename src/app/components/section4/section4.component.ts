import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {
  faqItems = [
    {
      question: 'Can I cancel my subscription?',
      answer: 'Fusce dapibus, tellus ac cursus commodo...',
    },
    {
      question: 'Which payment methods do you accept?',
      answer: 'Fusce dapibus, tellus ac cursus commodo...',
    },
    {
      question: 'How can I manage my Account?',
      answer: 'Fusce dapibus, tellus ac cursus commodo...',
    },
    {
      question: 'Is my credit card information secure?',
      answer: 'Fusce dapibus, tellus ac cursus commodo...',
    },
    // Add more FAQ items here
  ];  carouselItems = [
    { quote: 'Vivamus sagittis lacus augue laoreet rutrum faucibus auctor vestibulum ligula porta felis, euismod semper cras justo odio consectetur.', name: 'Coriss Ambady', role: 'Financial Analyst' },
    { quote: 'Vivamus sagittis lacus augue laoreet rutrum faucibus auctor vestibulum ligula porta felis, euismod semper cras justo odio consectetur.', name: 'Cory Zamora', role: 'Marketing Specialist' },
    { quote: 'Vivamus sagittis lacus augue laoreet rutrum faucibus auctor vestibulum ligula porta felis, euismod semper cras justo odio consectetur.', name: 'Nikolas Brooten', role: 'Sales Manager' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
