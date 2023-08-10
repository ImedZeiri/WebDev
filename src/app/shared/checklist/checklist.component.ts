import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  checklistColumns: { items: { text: string, mt: boolean }[] }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.checklistColumns = [
      {
        items: [
          { text: 'Aenean quam ornare. Curabitur blandit.', mt: false },
          { text: 'Nullam quis risus eget urna mollis ornare.', mt: true }
        ]
      },
      {
        items: [
          { text: 'Etiam porta euismod malesuada mollis.', mt: false },
          { text: 'Vivamus sagittis lacus vel augue rutrum.', mt: true }
        ]
      }
    ];
  }
}
