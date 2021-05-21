import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  h1Style: boolean = false;

  constructor(private data: DataService) {}

  firstClick() {
    this.h1Style = true;
    console.log('click from component logic')
    this.data.firstClick();
  }
}
