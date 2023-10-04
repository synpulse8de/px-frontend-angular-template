import { TestBed } from '@angular/core/testing'

import { ExampleFeature2Service } from './example-feature2.service'

describe('ExampleFeature2Service', () => {
  let service: ExampleFeature2Service

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ExampleFeature2Service)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
