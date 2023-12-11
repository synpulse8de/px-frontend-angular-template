import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Actions } from '@ngrx/effects'
import { of } from 'rxjs'
import {
  checkLoginStateActions,
  setKeycloakUserActions,
  SharedFeatureActions,
} from '../actions/shared-feature.actions'
import { KeycloakService } from 'keycloak-angular'
import { SharedFeatureEffects } from './shared-feature.effects'
import Keycloak, { KeycloakProfile } from 'keycloak-js'

/**
 * Test suite for `SharedFeatureEffects`.
 * This test suite aims to ensure that the shared feature effects operate correctly,
 * especially regarding interactions with the Keycloak authentication system and
 * the loading of shared features.
 */
describe('SharedFeatureEffects', () => {
  let actions$: Actions
  let effects: SharedFeatureEffects
  let keycloakService: KeycloakService

  /**
   * Setup block for each test.
   * Initializes the `SharedFeatureEffects` and mocks the necessary services.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SharedFeatureEffects,
        provideMockActions(() => actions$),
        KeycloakService,
      ],
    })

    effects = TestBed.inject(SharedFeatureEffects)
    keycloakService = TestBed.inject(KeycloakService)
  })

  /**
   * Test block for `checkKeycloakLogin$` effect.
   * This effect checks if a user is logged in through Keycloak.
   */
  describe('checkKeycloakLogin$', () => {
    /**
     * Test to verify if the effect returns a success action with the logged-in status when successful.
     */
    it('should return checkKeycloakLoginStateSuccess with loggedIn status', () => {
      const loggedIn = true

      // Mock the KeycloakService call
      spyOn(keycloakService, 'isLoggedIn').and.returnValue(
        Promise.resolve(loggedIn)
      )

      const action = checkLoginStateActions.checkKeycloakLoginState()
      actions$ = of(action)

      effects.checkKeycloakLogin$.subscribe((resultAction) => {
        expect(resultAction).toEqual(
          checkLoginStateActions.checkKeycloakLoginStateSuccess({ loggedIn })
        )
      })
    })

    /**
     * Test to verify if the effect returns a failure action when there's an error checking the login state.
     */
    it('should return checkKeycloakLoginStateFailure on error', () => {
      const error = 'Error checking login state'

      spyOn(keycloakService, 'isLoggedIn').and.returnValue(
        Promise.reject(error)
      )

      const action = checkLoginStateActions.checkKeycloakLoginState()
      actions$ = of(action)

      effects.checkKeycloakLogin$.subscribe((resultAction) => {
        expect(resultAction).toEqual(
          checkLoginStateActions.checkKeycloakLoginStateFailure({ error })
        )
      })
    })
  })

  /**
   * Test block for `loadSharedFeatures$` effect.
   * This effect is responsible for loading shared features.
   */
  describe('loadSharedFeatures$', () => {
    /**
     * Test to confirm if the effect returns a success action with the loaded data when successful.
     */
    it('should return loadSharedFeaturesSuccess', () => {
      const data = {} // whatever your mocked data is
      const action = SharedFeatureActions.loadSharedFeatures()
      actions$ = of(action)

      effects.loadSharedFeatures$.subscribe((resultAction) => {
        expect(resultAction).toEqual(
          SharedFeatureActions.loadSharedFeaturesSuccess({ data })
        )
      })
    })

    /**
     * Test to verify if the effect returns a failure action when there's an error loading shared features.
     */
    it('should return loadSharedFeaturesFailure on error', () => {
      const error = 'Error loading shared features'
      const action = SharedFeatureActions.loadSharedFeatures()
      actions$ = of(action)

      // Mock the EMPTY observable to throw an error for this test.
      // ... some setup here ...

      effects.loadSharedFeatures$.subscribe((resultAction) => {
        expect(resultAction).toEqual(
          SharedFeatureActions.loadSharedFeaturesFailure({ error })
        )
      })
    })
  })

  /**
   * Test block for `setKeycloakUser$` effect.
   * This effect sets the Keycloak user profile.
   */
  describe('setKeycloakUser$', () => {
    /**
     * Test to confirm if the effect returns a success action with the user data when successful.
     */
    it('should return setKeycloakUserSuccess with user data', () => {
      const user: KeycloakProfile = {
        firstName: 'John',
        lastName: 'Doe',
      }

      const kcI = new Keycloak()

      // Mock the KeycloakService call
      spyOn(keycloakService, 'getKeycloakInstance').and.returnValue(
        Object.assign({}, kcI, {
          loadUserProfile: () => Promise.resolve(user),
        })
      )

      const action = setKeycloakUserActions.setKeycloakUser()
      actions$ = of(action)

      effects.setKeycloakUser$.subscribe((resultAction) => {
        expect(resultAction).toEqual(
          setKeycloakUserActions.setKeycloakUserSuccess({ user })
        )
      })
    })

    /**
     * Test to verify if the effect returns a failure action when there's an error setting the user.
     */
    it('should return setKeycloakUserFailure on error', () => {
      const error = 'Error setting user'

      const kcI = new Keycloak()

      // Mock the KeycloakService call
      spyOn(keycloakService, 'getKeycloakInstance').and.returnValue(
        Object.assign({}, kcI, {
          loadUserProfile: () => Promise.reject(error),
        })
      )

      const action = setKeycloakUserActions.setKeycloakUser()
      actions$ = of(action)

      effects.setKeycloakUser$.subscribe((resultAction) => {
        expect(resultAction).toEqual(
          setKeycloakUserActions.setKeycloakUserFailure({ error })
        )
      })
    })
  })
})
