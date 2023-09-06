import { createFeatureSelector, createSelector } from '@ngrx/store'
import {
  EXAMPLE_FEATURE_1_FEATURE_KEY,
  ExampleFeature1State,
} from '../reducers/example-feature-1.reducer'

export const getExample2State = createFeatureSelector<ExampleFeature1State>(
  EXAMPLE_FEATURE_1_FEATURE_KEY
)

export const selectEntries = createSelector(
  getExample2State,
  (state: ExampleFeature1State) => state.entries
)

export const selectSelectedEntries = createSelector(
  getExample2State,
  (state: ExampleFeature1State) => state.selectedEntries
)

export const selectLoading = createSelector(
  getExample2State,
  (state: ExampleFeature1State) => state.loading
)

export const selectEntriesFilteredByName = (searchRequest: string) =>
  createSelector(
    selectEntries,
    (entries) =>
      entries?.filter((entry) =>
        entry.name.toLowerCase().includes(searchRequest.toLowerCase())
      )
  )
