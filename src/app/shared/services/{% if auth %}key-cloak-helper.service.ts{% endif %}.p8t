import { Injectable } from '@angular/core'
import { KeycloakService } from 'keycloak-angular'
import jwtDecode from 'jwt-decode'
import { KeycloakToken } from '../models/keycloak-token'
import { KeycloakUserProfile } from '../models/keycloak-user-profile'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class KeyCloakHelperService {
  private _userProfile: BehaviorSubject<KeycloakUserProfile> =
    new BehaviorSubject<KeycloakUserProfile>({})
  private _roles: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])
  private _attributes: BehaviorSubject<{ [key: string]: string } | undefined> =
    new BehaviorSubject<
      | {
          [key: string]: string
        }
      | undefined
    >({})

  constructor(private keycloak: KeycloakService) {}

  setUser(): void {
    this.keycloak
      .loadUserProfile()
      .then((userProfile: KeycloakUserProfile) => {
        this.userProfile = userProfile
        this.attributes = userProfile.attributes
        this.decodeToken()
      })
      .catch((err) => {
        console.log('Error while fetching user profile', err)
      })
  }

  // This observable returns the roles
  getUserRoles(): Observable<string[]> {
    return this.roles.asObservable()
  }

  // This observable returns the custom attributes
  getAttributes(): Observable<{ [key: string]: string } | undefined> {
    return this.attributes.asObservable()
  }

  private decodeToken(): void {
    if (this.keycloak.getKeycloakInstance().token) {
      const token = this.keycloak.getKeycloakInstance().token
      if (token) {
        const tokenData: KeycloakToken = jwtDecode(token)
        this.roles = tokenData.realm_access.roles || []
        // TODO groups are missing, still need to figure out how to fetch them
        // this.groups = tokenData.groups || [];
        // console.log(tokenData)
      } else {
        console.log('No token to decode!')
      }
    }
  }

  private get roles(): BehaviorSubject<string[]> {
    return this._roles
  }

  private set roles(value: string[]) {
    this._roles.next(value)
  }

  private get userProfile(): BehaviorSubject<KeycloakUserProfile> {
    return this._userProfile
  }

  private set userProfile(value: KeycloakUserProfile) {
    this._userProfile.next(value)
  }

  private get attributes(): BehaviorSubject<
    { [p: string]: string } | undefined
  > {
    return this._attributes
  }

  private set attributes(value: { [p: string]: string } | undefined) {
    this._attributes.next(value)
  }
}
