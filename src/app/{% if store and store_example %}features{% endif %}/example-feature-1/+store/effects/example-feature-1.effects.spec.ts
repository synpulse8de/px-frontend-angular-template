import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Actions } from '@ngrx/effects'
import { of, throwError } from 'rxjs'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import {
  addDataEntryActions,
  loadMockDataEntriesActions,
} from '../actions/example-feature-1.actions'
import { ExampleFeature1Effects } from './example-feature-1.effects'
import { ExampleFeature1Service } from '../../services/example-feature1.service'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ExampleFeature1Effects', () => {
  let actions$: Actions
  let effects: ExampleFeature1Effects
  let service: ExampleFeature1Service
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ExampleFeature1Effects,
        provideMockActions(() => actions$),
        ExampleFeature1Service,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ]
    })
    
    effects = TestBed.inject(ExampleFeature1Effects)
    service = TestBed.inject(ExampleFeature1Service)
  })

  it('should dispatch addDataEntrySuccess on successful addDataEntry', () => {
    const mockDataEntry = {
      id: '1',
      name: 'Entry 1',
      age: 10,
      email: 'mail@mail.com',
    }

    const action = addDataEntryActions.addDataEntry({ mockDataEntry })

    actions$ = of(action)
    spyOn(service, 'addDataEntry').and.returnValue(of(mockDataEntry))

    effects.addDataEntry$.subscribe((resultAction) => {
      expect(resultAction).toEqual(
        addDataEntryActions.addDataEntrySuccess({ mockDataEntry })
      )
    })
  })

  it('should dispatch addDataEntryFailure on failed addDataEntry', () => {
    const error = 'Error adding data entry'

    const action = addDataEntryActions.addDataEntry({
      mockDataEntry: {} as any,
    })

    actions$ = of(action)
    spyOn(service, 'addDataEntry').and.returnValue(throwError(() => error))

    effects.addDataEntry$.subscribe((resultAction) => {
      expect(resultAction).toEqual(
        addDataEntryActions.addDataEntryFailure({ error })
      )
    })
  })

  it('should dispatch loadMockDataEntriesSuccess on successful loadMockDataEntries', () => {
    const mockDataEntries = [
      { id: '1', name: 'Entry 1', age: 10, email: 'mail@mail.com' },
    ]

    const action = loadMockDataEntriesActions.loadMockDataEntries()

    actions$ = of(action)
    spyOn(service, 'loadMockData').and.returnValue(of(mockDataEntries))

    effects.loadExampleFeature2s$.subscribe((resultAction) => {
      expect(resultAction).toEqual(
        loadMockDataEntriesActions.loadMockDataEntriesSuccess({
          mockDataEntries,
        })
      )
    })
  })

  it('should dispatch loadMockDataEntriesFailure on failed loadMockDataEntries', () => {
    const error = 'Error loading data'

    const action = loadMockDataEntriesActions.loadMockDataEntries()

    actions$ = of(action)
    spyOn(service, 'loadMockData').and.returnValue(throwError(() => error))

    effects.loadExampleFeature2s$.subscribe((resultAction) => {
      expect(resultAction).toEqual(
        loadMockDataEntriesActions.loadMockDataEntriesFailure({ error })
      )
    })
  })
})
