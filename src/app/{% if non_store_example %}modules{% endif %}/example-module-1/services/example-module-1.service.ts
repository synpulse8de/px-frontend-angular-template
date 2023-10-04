import { Injectable } from '@angular/core'
import { delay, lastValueFrom, of } from 'rxjs'
import { MockData } from '../../../shared/models/mock-data.model'
import { data } from '../../../mock-data'

@Injectable({
  providedIn: 'root',
})
export class ExampleModule1Service {
  private _count = 0

  get count(): number {
    return this._count
  }

  set count(value: number) {
    this._count = value
  }

  private _data = data

  get data(): MockData[] {
    return this._data
  }

  set data(value: MockData[]) {
    this._data = value
  }

  private _pieChartValue = 80
  get pieChartValue(): number {
    return this._pieChartValue
  }

  set pieChartValue(value: number) {
    this._pieChartValue = value
  }

  public loadMockData(): Promise<MockData[]> {
    return lastValueFrom(of(this.data).pipe(delay(2500)))
  }

  addUser2(newUser: MockData): Promise<MockData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(newUser)
      }, 1500)
    })
  }

  constructor() {}
}
