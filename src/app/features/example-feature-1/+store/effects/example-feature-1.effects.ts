import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, concatMap, map } from 'rxjs/operators'
import { ExampleFeature1Service } from '../../services/example-feature1.service'
import * as ExampleFeature1Actions from '../../../example-feature-1/+store/actions/example-feature-1.actions'

@Injectable()
export class ExampleFeature1Effects {
  constructor(
    private actions$: Actions,
    private exampleFeature1Service: ExampleFeature1Service
  ) {}

  addDataEntry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExampleFeature1Actions.addDataEntry),
      concatMap((action) =>
        this.exampleFeature1Service.addDataEntry(action.mockDataEntry).pipe(
          map((mockDataEntry) =>
            ExampleFeature1Actions.addDataEntrySuccess({ mockDataEntry })
          ),
          catchError((error) =>
            of(ExampleFeature1Actions.addDataEntryFailure({ error }))
          )
        )
      )
    )
  })

  loadExampleFeature2s$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExampleFeature1Actions.loadMockDataEntries),
      concatMap(() =>
        this.exampleFeature1Service.loadMockData().pipe(
          map((mockDataEntries) =>
            ExampleFeature1Actions.loadMockDataEntriesSuccess({
              mockDataEntries,
            })
          ),
          catchError((error) =>
            of(ExampleFeature1Actions.loadMockDataEntriesFailure({ error }))
          )
        )
      )
    )
  })

  // increment$ = createEffect(() =>
  //     this.actions$.pipe(
  //         ofType(increment),
  //         mergeMap((action) => {
  //             this.exampleFeature1Service.updateQuestionnaire().pipe(
  //                     // map((response) => ({ response })),
  //                     // catchError((err) => of(getTableDataFailure({ error: err })))
  //                 )
  //             // Simulate an async operation here if needed
  //         }),
  //         catchError(() => of()) // Handle errors if needed
  //     )
  // );

  // decrement$ = createEffect(() =>
  //     this.actions$.pipe(
  //         ofType(decrement),
  //         mergeMap(() => {
  //             // Simulate an async operation here if needed
  //             return of(); // Return an observable with any additional actions if necessary
  //         }),
  //         catchError(() => of()) // Handle errors if needed
  //     )
  // );
}
