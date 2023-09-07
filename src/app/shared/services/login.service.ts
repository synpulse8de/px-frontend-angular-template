import { Injectable } from '@angular/core'
import { KeycloakService } from 'keycloak-angular'
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private keycloak: KeycloakService,
    private router: Router,
    protected a: ActivatedRoute
  ) {}

  async login() {
    await this.keycloak.login({
      redirectUri: window.location.origin + this.router.url,
    })
  }
}
