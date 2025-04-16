import { TestBed } from '@angular/core/testing'
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'

import { ExampleFeature1Service } from './example-feature1.service'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'

describe('ExampleFeature1Service', () => {
  let service: ExampleFeature1Service
  let httpMock: HttpTestingController
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ExampleFeature1Service, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
    })
    
    service = TestBed.inject(ExampleFeature1Service)
    httpMock = TestBed.inject(HttpTestingController)
  })
  
  afterEach(() => {
    httpMock.verify() // Ensure that there are no outstanding requests
  })
  
  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
