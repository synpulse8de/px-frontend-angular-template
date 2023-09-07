import { MockStore, provideMockStore } from '@ngrx/store/testing'
import {
  exampleFeature1Reducer,
  ExampleFeature1State,
} from './example-feature-1.reducer'
import { fakeAsync, TestBed } from '@angular/core/testing'
import {
  addDataEntry,
  addDataEntryFailure,
  addDataEntrySuccess,
  addSelection,
  loadMockDataEntries,
  loadMockDataEntriesFailure,
  loadMockDataEntriesSuccess,
  removeSelectedEntries,
  removeSelection,
  resetSelectedEntries,
} from '../actions/example-feature-1.actions'
import { MockData } from '../../../../shared/models/mock-data.model'

describe('Example Feature 1 Reducer', () => {
  let store: MockStore<ExampleFeature1State>
  const initialState: ExampleFeature1State = {
    count: 0,
    loading: false,
    entries: [],
    selectedEntries: [],
    error: null,
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    })

    store = TestBed.inject(MockStore)
  })

  it('should load mock data entries', fakeAsync(() => {
    const action = loadMockDataEntries()
    const state = exampleFeature1Reducer(initialState, action)

    expect(state.loading).toBeTrue()
  }))

  it('should load mock data entries successfully', () => {
    const mockDataEntries: MockData[] = [
      { id: '1', name: 'Entry 1', age: 10, email: 'mail@mail.com' },
    ]

    const action = loadMockDataEntriesSuccess({ mockDataEntries })
    const state = exampleFeature1Reducer(initialState, action)

    expect(state.entries).toEqual(mockDataEntries)
    expect(state.loading).toBeFalse()
  })

  it('should handle load mock data entries failure', () => {
    const error = 'Error loading data'
    const action = loadMockDataEntriesFailure({ error })
    const state = exampleFeature1Reducer(initialState, action)

    expect(state.error).toEqual(error)
    expect(state.loading).toBeFalse()
  })

  it('should add data entry', () => {
    const mockDataEntry: MockData = {
      id: '1',
      name: 'Entry 1',
      age: 10,
      email: 'mail@mail.com',
    }

    const action = addDataEntry({ mockDataEntry })
    const state = exampleFeature1Reducer(initialState, action)

    expect(state.loading).toBeTrue()
  })

  it('should add data entry successfully', () => {
    const mockDataEntry: MockData = {
      id: '2',
      name: 'Entry 2',
      age: 10,
      email: 'mail@mail.com',
    }

    const action = addDataEntrySuccess({ mockDataEntry })
    const state = exampleFeature1Reducer(initialState, action)

    expect(state.entries).toContain(mockDataEntry)
    expect(state.loading).toBeFalse()
  })

  it('should handle add data entry failure', () => {
    const error = 'Error adding data entry'
    const action = addDataEntryFailure({ error })
    const state = exampleFeature1Reducer(initialState, action)

    expect(state.error).toEqual(error)
    expect(state.loading).toBeFalse()
  })

  it('should add selection', () => {
    const entryId = '3'
    const action = addSelection({ entryId })
    const state = exampleFeature1Reducer(initialState, action)

    expect(state.selectedEntries).toContain(entryId)
  })

  it('should remove selection', () => {
    const entryId = '3'
    const action = removeSelection({ entryId })
    const state = exampleFeature1Reducer(initialState, action)

    expect(state.selectedEntries).not.toContain(entryId)
  })

  it('should remove selected entries', () => {
    const state: ExampleFeature1State = {
      ...initialState,
      entries: [
        { id: '1', name: 'Entry 1', age: 10, email: 'mail@mail.com' },
        { id: '2', name: 'Entry 2', age: 10, email: 'mail@mail.com' },
      ],
      selectedEntries: ['1'],
    }

    const action = removeSelectedEntries()
    const newState = exampleFeature1Reducer(state, action)

    expect(newState.entries).toEqual([
      { id: '2', name: 'Entry 2', age: 10, email: 'mail@mail.com' },
    ])
  })

  it('should reset selected entries', () => {
    const state: ExampleFeature1State = {
      ...initialState,
      selectedEntries: ['1', '2'],
    }

    const action = resetSelectedEntries()
    const newState = exampleFeature1Reducer(state, action)

    expect(newState.selectedEntries).toEqual([])
  })
})
