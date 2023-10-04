import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs'

import { ExampleFeature2Effects } from './example-feature-2.effects'

describe('ExampleFeature2Effects', () => {
  let actions$: Observable<any>
  let effects: ExampleFeature2Effects

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleFeature2Effects, provideMockActions(() => actions$)],
    })

    effects = TestBed.inject(ExampleFeature2Effects)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
