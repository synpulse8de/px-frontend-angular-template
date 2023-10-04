import { TestBed } from '@angular/core/testing'

import { ExampleFeature1Service } from './example-feature1.service'
import { AppModule } from '../../../app.module.ts'

describe('ExampleFeature1Service', () => {
  let service: ExampleFeature1Service

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    })
    service = TestBed.inject(ExampleFeature1Service)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
