import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromSharedFeature from '../reducers/shared-feature.reducer'
import { SharedFeatureState } from '../reducers/shared-feature.reducer'

export const selectSharedFeatureState =
  createFeatureSelector<SharedFeatureState>(
    fromSharedFeature.SHARED_FEATURE_KEY
  )

export const selectUserLoadingState = createSelector(
  selectSharedFeatureState,
  (state) => state.loadingStates.loadingUser
)

export const selectLoginLoadingState = createSelector(
  selectSharedFeatureState,
  (state) => state.loadingStates.loadingLoggedIn
)
