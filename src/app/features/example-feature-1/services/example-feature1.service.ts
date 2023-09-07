import { Injectable } from '@angular/core'
import { delay, Observable, of, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MockData } from '../../../shared/models/mock-data.model'
import { data } from '../../../mock-data'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ExampleFeature1Service {
  constructor(protected http: HttpClient) {}

  public loadMockData(): Observable<MockData[]> {
    return of(data).pipe(delay(2500))
  }

  /**
   * Creates a new data entry by making a POST request to a REST API endpoint.
   *
   * @param apiDataEntry The data to be added to the API.
   * @returns An Observable that emits the API response when successful.
   *          If an error occurs during the API call, it emits an error message.
   * @throws An error message if the API call fails.
   *
   * @remarks
   * This method sends a POST request to the specified API endpoint with the provided data.
   * It handles HTTP headers, simulates a delay with the 'delay' operator, and catches errors using 'catchError'.
   * If the API call fails, it throws an error message.
   */
  createDataEntry(apiDataEntry: any): Observable<any> {
    const url = 'https://example.com/api/data-entries'
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

    return this.http.post(url, apiDataEntry, { headers: httpHeaders }).pipe(
      delay(2000), // Simulating a delay
      catchError((error) => {
        console.error('Error creating data entry:', error)
        return throwError(
          () => new Error('Something went wrong while creating the entry.')
        )
      })
    )
  }

  /**
   * Executes a GraphQL query by sending a POST request to a GraphQL API endpoint.
   *
   * @param query The GraphQL query to be executed.
   * @param variables Variables to be passed with the query.
   * @returns An Observable that emits the GraphQL API response when successful.
   *          If an error occurs during the API call, it emits an error message.
   * @throws An error message if the GraphQL query fails.
   *
   * @remarks
   * This method constructs a GraphQL request with the provided query and variables.
   * It sets HTTP headers (including authorization if needed), simulates a delay with 'delay',
   * and catches errors using 'catchError'. If the GraphQL query fails, it throws an error message.
   */
  queryGraphQL(query: string, variables: any): Observable<any> {
    const url = 'https://example.com/graphql' // Replace with your GraphQL API endpoint
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer YOUR_ACCESS_TOKEN', // Add your authentication token if needed
    })

    const requestBody = {
      query,
      variables,
    }

    return this.http.post(url, requestBody, { headers: httpHeaders }).pipe(
      delay(3000), // Simulating a delay
      catchError((error) => {
        console.error('GraphQL query error:', error)
        return throwError(
          () => new Error('Something went wrong with the GraphQL query.')
        )
      })
    )
  }

  addDataEntry(mockDataEntry: MockData) {
    // const url: string = 'Add your api url here with correct path'
    // let body = JSON.stringify(mockDataEntry);
    // const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
    // return this.http.post(url, body,{ headers: httpHeaders })

    return of(mockDataEntry).pipe(delay(1500))
  }
}
