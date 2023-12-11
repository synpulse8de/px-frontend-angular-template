import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, concatMap, map } from 'rxjs/operators'
import { ExampleFeature1Service } from '../../services/example-feature1.service'
import {
  addDataEntryActions,
  loadMockDataEntriesActions,
} from '../actions/example-feature-1.actions'

@Injectable()
export class ExampleFeature1Effects {
  constructor(
    private actions$: Actions,
    private exampleFeature1Service: ExampleFeature1Service
  ) {}

  addDataEntry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addDataEntryActions.addDataEntry),
      concatMap((action) =>
        this.exampleFeature1Service.addDataEntry(action.mockDataEntry).pipe(
          map((mockDataEntry) =>
            addDataEntryActions.addDataEntrySuccess({ mockDataEntry })
          ),
          catchError((error) =>
            of(addDataEntryActions.addDataEntryFailure({ error }))
          )
        )
      )
    )
  })

  loadExampleFeature2s$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadMockDataEntriesActions.loadMockDataEntries),
      concatMap(() =>
        this.exampleFeature1Service.loadMockData().pipe(
          map((mockDataEntries) =>
            loadMockDataEntriesActions.loadMockDataEntriesSuccess({
              mockDataEntries,
            })
          ),
          catchError((error) =>
            of(loadMockDataEntriesActions.loadMockDataEntriesFailure({ error }))
          )
        )
      )
    )
  })
}
