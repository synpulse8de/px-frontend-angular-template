import { createAction, props } from '@ngrx/store'
import { MockData } from '../../../../shared/models/mock-data.model'

export const increment = createAction('[Example Feature 1] Increment')
export const decrement = createAction('[Example Feature 1] Decrement')

export const addDataEntry = createAction(
  '[Example Feature 1] Adding Data Entry',
  props<{ mockDataEntry: MockData }>()
)

export const addDataEntrySuccess = createAction(
  '[Example Feature 1] Adding Data Entry Success',
  props<{ mockDataEntry: MockData }>()
)

export const addDataEntryFailure = createAction(
  '[Example Feature 1] Adding Data Entry Failure',
  props<{ error: any }>()
)

export const loadMockDataEntries = createAction(
  '[Example Feature 1] Load Mock Data Entries'
)

export const loadMockDataEntriesSuccess = createAction(
  '[Example Feature 1] Load Mock Data Entries Success',
  props<{ mockDataEntries: MockData[] }>()
)

export const loadMockDataEntriesFailure = createAction(
  '[Example Feature 1] Load Mock Data Entries Failure',
  props<{ error: any }>()
)

export const addSelection = createAction(
  '[Example Feature 1] Add selection',
  props<{ entryId: string }>()
)
export const removeSelection = createAction(
  '[Example Feature 1] Remove selection',
  props<{ entryId: string }>()
)

export const removeSelectedEntries = createAction(
  '[Example Feature 1] Remove selected Entries'
)

export const resetSelectedEntries = createAction(
  '[Example Feature 1] Reset selected Entries'
)
