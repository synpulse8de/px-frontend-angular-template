import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, concatMap, map } from 'rxjs/operators'
import { of } from 'rxjs'
import * as ExampleFeature2Actions from '../actions/example-feature-2.actions'
import { ExampleFeature2Service } from '../../services/example-feature2.service'

@Injectable()
export class ExampleFeature2Effects {
  constructor(private actions$: Actions) {}

  // // Example effect: Adding an entity
  // addExampleEntity$ = createEffect(() =>
  //     this.actions$.pipe(
  //         ofType(addExampleEntity),
  //         mergeMap(action => {
  //             // Simulate an async operation here if needed
  //             const entity: ExampleEntity = {
  //                 id: 'some-id', // Generate a unique ID or use your own logic
  //                 // ... other properties
  //             };
  //             return of(); // Return an observable with any additional actions if necessary
  //         }),
  //         catchError(() => of()) // Handle errors if needed
  //     )
  // );
  //
  // // Example effect: Removing an entity
  // removeExampleEntity$ = createEffect(() =>
  //     this.actions$.pipe(
  //         ofType(removeExampleEntity),
  //         mergeMap(action => {
  //             // Simulate an async operation here if needed
  //             return of(); // Return an observable with any additional actions if necessary
  //         }),
  //         catchError(() => of()) // Handle errors if needed
  //     )
  // );
}
