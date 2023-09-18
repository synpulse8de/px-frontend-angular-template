import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, concatMap, map } from 'rxjs/operators'
import { EMPTY, from, of } from 'rxjs'
import {
  checkLoginStateActions,
  setKeycloakUserActions,
  SharedFeatureActions,
} from '../actions/shared-feature.actions'
import { KeycloakService } from 'keycloak-angular'
import { KeycloakProfile } from 'keycloak-js'

@Injectable()
export class SharedFeatureEffects {
  loadSharedFeatures$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedFeatureActions.loadSharedFeatures),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((data) =>
            SharedFeatureActions.loadSharedFeaturesSuccess({ data })
          ),
          catchError((error) =>
            of(SharedFeatureActions.loadSharedFeaturesFailure({ error }))
          )
        )
      )
    )
  })

  checkKeycloakLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(checkLoginStateActions.checkKeycloakLoginState),
      concatMap(() =>
        from(this.keycloakService.isLoggedIn()).pipe(
          map((loggedIn: boolean) =>
            checkLoginStateActions.checkKeycloakLoginStateSuccess({ loggedIn })
          ),
          catchError((error) => {
            console.log(error)
            return of(
              checkLoginStateActions.checkKeycloakLoginStateFailure({ error })
            )
          })
        )
      )
    )
  })

  setKeycloakUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setKeycloakUserActions.setKeycloakUser),
      concatMap(() =>
        from(this.keycloakService.getKeycloakInstance().loadUserProfile()).pipe(
          map((user: KeycloakProfile) =>
            setKeycloakUserActions.setKeycloakUserSuccess({ user })
          ),
          catchError((error) => {
            return of(setKeycloakUserActions.setKeycloakUserFailure({ error }))
          })
        )
      )
    )
  })

  constructor(
    private actions$: Actions,
    private keycloakService: KeycloakService
  ) {}
}
