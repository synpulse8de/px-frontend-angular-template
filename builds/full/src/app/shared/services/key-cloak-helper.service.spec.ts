import { TestBed } from '@angular/core/testing'

import { KeyCloakHelperService } from './key-cloak-helper.service'
import { KeycloakService } from 'keycloak-angular'

describe('KeyCloakHelperService', () => {
  let service: KeyCloakHelperService

  beforeEach(() => {
    service = jasmine.createSpyObj('KeycloakService', [
      'loadUserProfile',
      'getKeycloakInstance',
    ])
    TestBed.configureTestingModule({
      providers: [
        KeyCloakHelperService,
        { provide: KeycloakService, useValue: service },
      ],
    })

    service = TestBed.inject(KeyCloakHelperService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
