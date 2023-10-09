import { AfterViewInit, Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { debounceTime } from 'rxjs'
import { Store } from '@ngrx/store'
import { ExampleModule1Service } from "../../../modules/example-module-1/services/example-module-1.service";

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit, AfterViewInit {
    protected percentageVariable: number = 0;
    protected colorVariable: string = 'orange' // Set the default color

    protected pieFormGroup!: FormGroup

    constructor(private store: Store, private exampleModule1Service: ExampleModule1Service) {
    }

    ngOnInit(): void {
        this.pieFormGroup = this.initFormGroup()
        this.percentageVariable = this.exampleModule1Service.pieChartValue
    }

    private initFormGroup() {
        return new FormGroup({
            percentageInput: new FormControl(),
        })
    }

    private setFormGroupListeners() {
        this.pieFormGroup
            .get('percentageInput')
            ?.valueChanges.pipe(debounceTime(100))
            .subscribe((inputValue) => {
                const inputNumber = Number(inputValue)
                if (inputNumber && inputNumber <= 100 && inputNumber >= 0) {
                    this.exampleModule1Service.pieChartValue = inputNumber;
                } else {
                    this.exampleModule1Service.pieChartValue = 0;
                }
            })
    }

    ngAfterViewInit(): void {
        this.setFormGroupListeners()
    }
}
