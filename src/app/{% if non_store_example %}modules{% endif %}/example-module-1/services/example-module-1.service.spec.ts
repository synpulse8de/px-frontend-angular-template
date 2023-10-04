import { TestBed } from '@angular/core/testing'

import { ExampleModule1Service } from './example-module-1.service'

describe('ExampleModule1Service', () => {
  let service: ExampleModule1Service

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ExampleModule1Service)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
