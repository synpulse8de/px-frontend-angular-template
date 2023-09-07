import { createReducer, on } from '@ngrx/store'
import { decrement, increment } from '../actions/example-feature-1.actions'
import * as ExampleFeature1Actions from '../../../example-feature-1/+store/actions/example-feature-1.actions'
import { MockData } from '../../../../shared/models/mock-data.model'

export const EXAMPLE_FEATURE_1_FEATURE_KEY = 'exampleFeature1'

export interface ExampleFeature1State {
  count: number
  loading: boolean
  entries: MockData[]
  selectedEntries: string[]
  error: any
}

export const initialState: ExampleFeature1State = {
  count: 0,
  loading: false,
  entries: [],
  selectedEntries: [],
  error: null,
}

export const exampleFeature1Reducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(ExampleFeature1Actions.loadMockDataEntries, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    ExampleFeature1Actions.loadMockDataEntriesSuccess,
    (state, { mockDataEntries }) => ({
      ...state,
      entries: mockDataEntries,
      loading: false,
    })
  ),
  on(
    ExampleFeature1Actions.loadMockDataEntriesFailure,
    (state: ExampleFeature1State, { error }) => ({
      ...state,
      error,
      loading: false,
    })
  ),
  on(ExampleFeature1Actions.addDataEntry, (state: ExampleFeature1State) => ({
    ...state,
    loading: true,
  })),
  on(
    //TODO somehow Type recognized as Parameter, investigate
    ExampleFeature1Actions.addDataEntrySuccess,
    (state, { mockDataEntry }) => ({
      ...state,
      entries: [...state.entries, mockDataEntry],
      loading: false,
    })
  ),
  on(ExampleFeature1Actions.addDataEntryFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(ExampleFeature1Actions.addSelection, (state, { entryId }) => ({
    ...state,
    selectedEntries: [...state.selectedEntries, entryId],
  })),
  on(ExampleFeature1Actions.removeSelection, (state, { entryId }) => ({
    ...state,
    selectedEntries: state.selectedEntries.filter((entry) => entry !== entryId),
  })),
  on(ExampleFeature1Actions.removeSelectedEntries, (state) => ({
    ...state,
    entries: state.entries.filter(
      (el) => !state.selectedEntries.includes(el.id)
    ),
  })),
  on(ExampleFeature1Actions.resetSelectedEntries, (state) => ({
    ...state,
    selectedEntries: [],
  }))
)
