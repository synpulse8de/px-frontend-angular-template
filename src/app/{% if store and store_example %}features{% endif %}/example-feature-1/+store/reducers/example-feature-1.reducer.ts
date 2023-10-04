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
  loadingStates: {
    initLoading: boolean
    changeUserDataLoading: boolean
  }
}

export const initialState: ExampleFeature1State = {
  count: 0,
  loading: false,
  entries: [],
  selectedEntries: [],
  error: null,
  loadingStates: {
    initLoading: false,
    changeUserDataLoading: false,
  },
}

export const exampleFeature1Reducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),

  on(
    ExampleFeature1Actions.loadMockDataEntriesActions.loadMockDataEntries,
    (state) => ({
      ...state,
      loadingStates: { ...state.loadingStates, ['initLoading']: true },
    })
  ),
  on(
    ExampleFeature1Actions.loadMockDataEntriesActions
      .loadMockDataEntriesSuccess,
    (state, { mockDataEntries }) => ({
      ...state,
      entries: mockDataEntries,
      loadingStates: { ...state.loadingStates, ['initLoading']: false },
    })
  ),
  on(
    ExampleFeature1Actions.loadMockDataEntriesActions
      .loadMockDataEntriesFailure,
    (state: ExampleFeature1State, { error }) => ({
      ...state,
      error,
      loadingStates: { ...state.loadingStates, ['initLoading']: false },
    })
  ),
  on(
    ExampleFeature1Actions.addDataEntryActions.addDataEntry,
    (state: ExampleFeature1State) => ({
      ...state,
      loadingStates: {
        ...state.loadingStates,
        ['changeUserDataLoading']: true,
      },
    })
  ),
  on(
    //TODO somehow Type recognized as Parameter, investigate
    ExampleFeature1Actions.addDataEntryActions.addDataEntrySuccess,
    (state, { mockDataEntry }) => ({
      ...state,
      entries: [...state.entries, mockDataEntry],
      loadingStates: {
        ...state.loadingStates,
        ['changeUserDataLoading']: false,
      },
    })
  ),
  on(
    ExampleFeature1Actions.addDataEntryActions.addDataEntryFailure,
    (state, { error }) => ({
      ...state,
      error,
      loadingStates: {
        ...state.loadingStates,
        ['changeUserDataLoading']: false,
      },
    })
  ),
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
