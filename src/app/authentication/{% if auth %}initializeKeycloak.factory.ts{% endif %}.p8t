import { KeycloakService } from 'keycloak-angular'
import { KeyCloakEnv } from '../../assets/utils/keyCloakEnv'
import { KeyCloakHelperService } from '../shared/services/key-cloak-helper.service'

/**
 * Initializes Keycloak for authentication and authorization.
 *
 * This function returns a function that, when invoked, will initialize Keycloak using the provided `KeycloakService`.
 * The initialization settings are defined in the function itself and use environment variables for configurable options.
 *
 * @param {KeycloakService} keycloak - The KeycloakService instance to initialize.
 *
 * @param keyCloakHelperService A helper service to retrieve roles, attributes and groups of user
 * @param keyCloakEnv File containing the environment variables for keycloak initialization
 * @returns {Function} A function that initializes the Keycloak service when invoked.
 *
 * ### Environment Variables:
 * - `KEYCLOAK_URL_WEB`: The URL for the Keycloak server.
 * - `KEYCLOAK_REALM`: The realm to use in Keycloak.
 * - `KEYCLOAK_ID`: The client ID for the application in Keycloak.
 *
 * ### Init Options:
 * The `initOptions` object can be used to specify additional initialization settings. Currently, it's left empty, but you can uncomment the lines to add options like `checkLoginIframe` or `onLoad`.
 *
 * ### Should Add Token:
 * The `shouldAddToken` function determines whether a token should be added to a request.
 * - If the request is a GET request AND its URL contains paths like `/assets` or `/clients/public`, then no token will be added.
 *
 */

export function initializeKeycloak(
  keycloak: KeycloakService,
  keyCloakHelperService: KeyCloakHelperService,
  keyCloakEnv: KeyCloakEnv
): Function {
  return async () => {
    await keycloak.init({
      config: {
        url: keyCloakEnv.KEYCLOAK_URL,
        realm: keyCloakEnv.KEYCLOAK_REALM,
        clientId: keyCloakEnv.KEYCLOAK_CLIENT_ID,
      },
      initOptions: {
        checkLoginIframe: false,
        onLoad: 'check-sso',
      },
      shouldAddToken: (request) => {
        const { method, url } = request

        const isGetRequest = 'GET' === method.toUpperCase()
        const acceptablePaths = ['/assets', '/clients/public']
        const isAcceptablePathMatch = acceptablePaths.some((path) =>
          url.includes(path)
        )

        return !(isGetRequest && isAcceptablePathMatch)
      },
    })
    keyCloakHelperService.setUser()
  }
}
