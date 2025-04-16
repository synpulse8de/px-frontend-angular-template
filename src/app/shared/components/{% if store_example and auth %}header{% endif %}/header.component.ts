import { Component, OnInit } from '@angular/core'

import { KeycloakService } from 'keycloak-angular'
import { LoginService } from '../../services/login.service'
import { KeycloakProfile } from 'keycloak-js'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent implements OnInit {
  constructor(
      private keycloakService: KeycloakService,
      private loginService: LoginService
  ) {
  }
  
  private currentUser: KeycloakProfile = { firstName: '', lastName: '' }
  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.keycloakService
          .getKeycloakInstance()
          .loadUserProfile()
          .then((i) => (this.currentUser = i))
          .catch((err) => console.log(err))
    }
  }
  protected isLoggedIn(): boolean | undefined {
    return this.keycloakService.getKeycloakInstance().authenticated
  }

  protected login(): void {
    this.loginService.login()
  }

  protected getUser(): string {
    if (this.currentUser) {
      const firstName = this.currentUser.firstName
      const lastName = this.currentUser.lastName
      if (firstName && lastName) {
        return firstName + ' ' + lastName + ' ' + '!'
      }
    }
    return ''
  }

  protected logout(): void {
    this.keycloakService.logout('http://localhost:4200/home')
  }
}
