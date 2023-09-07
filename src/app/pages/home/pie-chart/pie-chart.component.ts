import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit, AfterViewInit {
  @ViewChild('pieChart') pieChart: ElementRef | undefined
  @Input() chartData: { category: string; value: number }[] = []

  protected percentageVariable = 80 // Set the default percentage
  protected colorVariable: string = 'orange' // Set the default color

  protected pieFormGroup!: FormGroup

  constructor() {}

  ngOnInit(): void {
    this.pieFormGroup = this.initFormGroup()
  }

  private initFormGroup() {
    return new FormGroup({
      percentageInput: new FormControl(this.percentageVariable),
    })
  }

  private setFormGroupListeners() {
    console.log(this.pieFormGroup.get('percentageInput'))
    this.pieFormGroup
      .get('percentageInput')
      ?.valueChanges.subscribe((inputValue) => {
        const inputNumber = Number(inputValue)
        if (inputNumber && inputNumber <= 100 && inputNumber >= 0) {
          this.percentageVariable = inputNumber
        } else {
          this.percentageVariable = 0
        }
      })
  }

  ngAfterViewInit(): void {
    this.setFormGroupListeners()
  }
}
