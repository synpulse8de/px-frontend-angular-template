import { Injectable } from '@angular/core'
import { delay, Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { MockData } from '../../../shared/models/mock-data.model'
import { data } from '../../../mock-data'

@Injectable({
  providedIn: 'root',
})
export class ExampleFeature1Service {
  constructor(protected http: HttpClient) {}

  public loadMockData(): Observable<MockData[]> {
    return of(data).pipe(delay(2500))
  }

  addDataEntry(mockDataEntry: MockData) {
    // const url: string = 'Add your api url here with correct path'
    // let body = JSON.stringify(mockDataEntry);
    // const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
    // return this.http.post(url, body,{ headers: httpHeaders })

    return of(mockDataEntry).pipe(delay(1500))
  }
}
