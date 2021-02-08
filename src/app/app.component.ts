import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fruits-status';
  fruits = [
    {
      name: 'Apple',
      isChecked: false
    },
    {
      name: 'Peach',
      isChecked: false
    },
    {
      name: 'Banana',
      isChecked: false
    },
    {
      name: 'Grape',
      isChecked: true,
    },
    {
      name: 'Pear',
      isChecked: false
    },
    {
      name: 'Pineapple',
      isChecked: false
    }
  ];

  changeStatus(index: any): void {
    this.fruits[index].isChecked = !this.fruits[index].isChecked;
  }
}
