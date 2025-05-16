import { Component } from '@angular/core';
import { selectPieChartValue } from '../../../../shared/+store/selectors/shared-feature.selectors'
import { Store } from '@ngrx/store'
import { AsyncPipe } from '@angular/common'
import { RouterLink } from '@angular/router'
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card'

@Component({
  selector: 'app-pie-chart-showcase',
  imports: [
    AsyncPipe,
    RouterLink,
    MatCard,
    MatCardHeader,
    MatCardContent,
  ],
  templateUrl: './pie-chart-showcase.component.html',
  styleUrl: './pie-chart-showcase.component.scss',
  standalone: true
})
export class PieChartShowcaseComponent {
  pieChartValue$ = this.store.select(selectPieChartValue)
  
  constructor(private store: Store) {
  }
}
