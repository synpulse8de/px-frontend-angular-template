import { TestBed } from '@angular/core/testing'

import { ExampleFeature1Service } from './example-feature1.service'

describe('ExampleFeature1Service', () => {
  let service: ExampleFeature1Service

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ExampleFeature1Service)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
