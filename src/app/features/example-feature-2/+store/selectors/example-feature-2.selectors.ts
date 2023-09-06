import { createFeatureSelector, createSelector } from '@ngrx/store'
import {
  exampleFeature2sFeatureKey,
  State,
} from '../reducers/example-feature-2.reducer'

export const getExample2State = createFeatureSelector<State>(
  exampleFeature2sFeatureKey
)

export const selectState = createSelector(
  getExample2State,
  (state: State) => state
)
