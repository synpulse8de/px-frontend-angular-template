import { TestBed } from '@angular/core/testing'
import { KeycloakService } from 'keycloak-angular'
import { ActivatedRoute, Router } from '@angular/router'
import { LoginService } from './login.service'

/**
 * This suite of tests is focused on the `LoginService`.
 * The purpose of these tests is to ensure that the `LoginService` works as expected,
 * especially its interaction with `KeycloakService` for authentication.
 */
describe('LoginService', () => {
  // Declare local variables to hold the instances of services and their mock counterparts.
  let service: LoginService
  let keycloakServiceMock: jasmine.SpyObj<KeycloakService>
  let routerMock: jasmine.SpyObj<Router>
  let activatedRouteMock: any

  /**
   * This block is executed before each test case.
   * It sets up the testing environment, mocks and initializes the service to be tested.
   */
  beforeEach(() => {
    // Creating spy objects (mocks) for external services to isolate the tests.
    keycloakServiceMock = jasmine.createSpyObj('KeycloakService', ['login'])
    routerMock = jasmine.createSpyObj('Router', { url: '/home' })
    activatedRouteMock = {}

    // Setting up Angular's testing module with the necessary providers.
    TestBed.configureTestingModule({
      providers: [
        LoginService,
        // Here, instead of using the actual `KeycloakService`, we use our mock.
        { provide: KeycloakService, useValue: keycloakServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    })

    // Getting an instance of the service under test.
    service = TestBed.inject(LoginService)
  })

  /**
   * Basic sanity test to check if the service instance was successfully created.
   */
  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  /**
   * Nested suite focusing on the `login` method of `LoginService`.
   */
  describe('login', () => {
    /**
     * This test ensures that when the `login` method is called,
     * it correctly calls the `login` method of the `KeycloakService`
     * with the correct `redirectUri` parameter.
     */
    it('should call keycloak login with correct redirectUri', async () => {
      // The expected redirect URL after logging in.
      const expectedRedirectUri = `${window.location.origin}${routerMock.url}`

      // Call the method under test.
      await service.login()

      // Assert that the `KeycloakService`'s login method is called with the expected value.
      expect(keycloakServiceMock.login).toHaveBeenCalledWith({
        redirectUri: expectedRedirectUri,
      })
    })
  })
})
