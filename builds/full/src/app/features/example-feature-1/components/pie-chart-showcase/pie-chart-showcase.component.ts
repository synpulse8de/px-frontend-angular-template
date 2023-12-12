import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectPieChartValue } from '../../../../shared/+store/selectors/shared-feature.selectors'

@Component({
  selector: 'app-pie-chart-showcase',
  templateUrl: './pie-chart-showcase.component.html',
  styleUrls: ['./pie-chart-showcase.component.scss'],
})
export class PieChartShowcaseComponent {
  pieChartValue$ = this.store.select(selectPieChartValue)

  constructor(private store: Store) {}
}
