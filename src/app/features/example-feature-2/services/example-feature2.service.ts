import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { data } from '../../../mock-data'
import { MockData } from '../../../shared/models/mock-data.model'

@Injectable({
  providedIn: 'root',
})
export class ExampleFeature2Service {
  constructor() {}

  public loadMockData(): Observable<MockData[]> {
    let obs: Observable<MockData[]> = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(data)
        subscriber.complete()
      }, 3000)
    })
    return obs
  }
}
