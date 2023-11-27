import { Component, OnInit } from '@angular/core'
import { ExampleModule1Service } from '../../services/example-module-1.service'

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent implements OnInit {
  protected count: number = 0

  constructor(private exampleModule1Service: ExampleModule1Service) {}

  ngOnInit(): void {
    this.count = this.exampleModule1Service.count
  }

  public onIncrement(): void {
    this.exampleModule1Service.count++
    this.count++
  }

  public onDecrement(): void {
    this.exampleModule1Service.count--
    this.count--
  }
}
