import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  chartData = [
    { category: 'Category 1', value: 30 },
    { category: 'Category 2', value: 40 },
    { category: 'Category 3', value: 20 },
  ]
}
