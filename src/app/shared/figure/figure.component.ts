import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css']
})
export class FigureComponent implements OnInit {
  @Input() src: string='';
  @Input() srcset: string='';
  @Input() class: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
