import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store'
import { KeycloakProfile } from 'keycloak-js'

export const SharedFeatureActions = createActionGroup({
  source: 'Shared Feature',
  events: {
    'Load Shared Features': emptyProps(),
    'Load Shared Features Success': props<{ data: unknown }>(),
    'Load Shared Features Failure': props<{ error: unknown }>(),
  },
})

export const changePieChartValue = createAction(
  '[Shared Feature] Change pie chart value',
  props<{ pieChartValue: number }>()
)

export const checkLoginStateActions = createActionGroup({
  source: 'Shared Feature',
  events: {
    'Check Keycloak Login State': emptyProps(),
    'Check Keycloak Login State Success': props<{ loggedIn: boolean }>(),
    'Check Keycloak Login State Failure': props<{ error: any }>(),
  },
})

export const setKeycloakUserActions = createActionGroup({
  source: 'Shared Feature',
  events: {
    'Set Keycloak User': emptyProps(),
    'Set Keycloak User Success': props<{ user: KeycloakProfile }>(),
    'Set Keycloak User Failure': props<{ error: any }>(),
  },
})
