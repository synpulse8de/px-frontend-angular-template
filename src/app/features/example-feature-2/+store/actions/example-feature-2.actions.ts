import { createAction, props } from '@ngrx/store'
import { Update } from '@ngrx/entity'

import { MockData } from '../../../../shared/models/mock-data.model'

export const setMockDataEntries = createAction(
  '[Example Feature 2] set Mock Data Entries',
  props<{ mockDataEntries: MockData[] }>()
)

export const addMockDataEntry = createAction(
  '[Example Feature 2] Add Mock Data Entry',
  props<{ mockDataEntry: MockData }>()
)

export const upsertMockDataEntry = createAction(
  '[Example Feature 2] Upsert Mock Data Entry',
  props<{ mockDataEntry: MockData }>()
)

export const addMockDataEntries = createAction(
  '[Example Feature 2] Add Mock Data Entries',
  props<{ mockDataEntries: MockData[] }>()
)

export const upsertMockDataEntries = createAction(
  '[Example Feature 2] Upsert Mock Data Entries',
  props<{ mockDataEntries: MockData[] }>()
)

export const updateMockDataEntry = createAction(
  '[Example Feature 2] Update Mock Data Entry',
  props<{ mockDataEntry: Update<MockData> }>()
)

export const updateMockDataEntries = createAction(
  '[Example Feature 2] Update Mock Data Entries',
  props<{ mockDataEntries: Update<MockData>[] }>()
)

export const deleteMockDataEntry = createAction(
  '[Example Feature 2] Delete Mock Data Entry',
  props<{ id: string }>()
)

export const deleteMockDataEntries = createAction(
  '[Example Feature 2] Delete Mock Data Entries',
  props<{ ids: string[] }>()
)

export const clearMockDataEntries = createAction(
  '[Example Feature 2] Clear Mock Data Entries'
)

export const addExampleEntity = createAction(
  '[Example Feature 2] Add Example Entity',
  props<{ entity: MockData }>()
)

export const removeExampleEntity = createAction(
  '[Example Feature 2] Remove Example Entity',
  props<{ id: string }>()
)
