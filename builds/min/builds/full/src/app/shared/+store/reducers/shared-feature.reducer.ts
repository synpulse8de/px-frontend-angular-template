import { createFeature, createReducer, on } from '@ngrx/store'
import {
  changePieChartValue,
  checkLoginStateActions,
  setKeycloakUserActions,
  SharedFeatureActions,
} from '../actions/shared-feature.actions'
import { KeycloakProfile } from 'keycloak-js'

export const SHARED_FEATURE_KEY = 'sharedFeature'

export interface SharedFeatureState {
  pieChartValue: number
  loggedIn: boolean
  userProfile: KeycloakProfile
  error: any
  loadingStates: {
    loadingUser: boolean
    loadingLoggedIn: boolean
  }
}

export const initialState: SharedFeatureState = {
  pieChartValue: 80,
  loggedIn: false,userProfile: {},
  error: null,
  loadingStates: {
    loadingUser: false,
    loadingLoggedIn: false,
  },
}

export const reducer = createReducer(
  initialState,
  on(
    SharedFeatureActions.loadSharedFeatures,
    (state: SharedFeatureState) => state
  ),
  on(setKeycloakUserActions.setKeycloakUser, (state: SharedFeatureState) => ({
    ...state,
    loadingStates: { ...state.loadingStates, ['loadingUser']: true },
  })),
  on(
    setKeycloakUserActions.setKeycloakUserSuccess,
    (state: SharedFeatureState, { user }) => ({
      ...state,
      userProfile: user,
      loadingStates: { ...state.loadingStates, ['loadingUser']: false },
    })
  ),
  on(
    setKeycloakUserActions.setKeycloakUserFailure,
    (state: SharedFeatureState, { error }) => ({
      ...state,
      error,
      loadingStates: { ...state.loadingStates, ['loadingUser']: false },
    })
  ),
  on(
    checkLoginStateActions.checkKeycloakLoginState,
    (state: SharedFeatureState) => ({
      ...state,
    })
  ),
  on(
    checkLoginStateActions.checkKeycloakLoginStateSuccess,
    (state: SharedFeatureState, { loggedIn }) => ({
      ...state,
      loggedIn,
    })
  ),
  on(
    checkLoginStateActions.checkKeycloakLoginStateFailure,
    (state: SharedFeatureState, { error }) => ({
      ...state,
      error,
    })
  ),
  on(changePieChartValue, (state: SharedFeatureState, { pieChartValue }) => ({
    ...state,
    pieChartValue,
  }))
)

export const sharedFeature = createFeature({
  name: SHARED_FEATURE_KEY,
  reducer,
})
