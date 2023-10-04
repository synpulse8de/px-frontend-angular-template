import { Component, OnInit } from '@angular/core'
import { ExampleModule1Service } from '../../services/example-module-1.service'

@Component({
  selector: 'app-pie-chart-showcase',
  templateUrl: './pie-chart-showcase.component.html',
  styleUrls: ['./pie-chart-showcase.component.scss'],
})
export class PieChartShowcaseComponent implements OnInit {
  pieChartValue = 0

  constructor(private exampleModule1Service: ExampleModule1Service) {}

  ngOnInit(): void {
    this.pieChartValue = this.exampleModule1Service.pieChartValue
  }
}
