import { createFeatureSelector, createSelector } from '@ngrx/store'
import {
  EXAMPLE_FEATURE_1_FEATURE_KEY,
  ExampleFeature1State,
} from '../reducers/example-feature-1.reducer'

export const selectSharedFeatureState =
  createFeatureSelector<ExampleFeature1State>(EXAMPLE_FEATURE_1_FEATURE_KEY)

export const selectInitLoadingState = createSelector(
  selectSharedFeatureState,
  (state) => state.loadingStates.initLoading
)

export const selectChangeUserDataLoadingState = createSelector(
  selectSharedFeatureState,
  (state) => state.loadingStates.changeUserDataLoading
)
