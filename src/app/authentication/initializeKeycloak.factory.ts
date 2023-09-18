import { KeycloakService } from 'keycloak-angular'
import { environment } from '../../environments/environment'

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.KEYCLOAK_URL_WEB,
        realm: environment.KEYCLOAK_REALM,
        clientId: environment.KEYCLOAK_ID,
      },
      initOptions: {
        checkLoginIframe: false,
        onLoad: 'login-required',
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
}
