import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs'

import { ExampleFeature1Effects } from './example-feature-1.effects'

describe('ExampleFeature1Effects', () => {
  let actions$: Observable<any>
  let effects: ExampleFeature1Effects

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleFeature1Effects, provideMockActions(() => actions$)],
    })

    effects = TestBed.inject(ExampleFeature1Effects)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
