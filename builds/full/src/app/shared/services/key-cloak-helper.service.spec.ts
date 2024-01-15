import { TestBed } from '@angular/core/testing'

import { KeyCloakHelperService } from './key-cloak-helper.service'

describe('KeyCloakHelperService', () => {
  let service: KeyCloakHelperService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(KeyCloakHelperService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
