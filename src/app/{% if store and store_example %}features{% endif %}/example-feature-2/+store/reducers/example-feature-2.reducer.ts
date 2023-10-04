import { createFeature, createReducer, on } from '@ngrx/store'
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { ExampleFeature2 } from '../models/example-feature-2.model'
import * as ExampleFeature2Actions from '../actions/example-feature-2.actions'
import { MockData } from '../../../../shared/models/mock-data.model'

export const exampleFeature2sFeatureKey = 'exampleFeature2s'

export interface State extends EntityState<ExampleFeature2> {
  // additional entities state properties
  loading: boolean
  error: any
}

export const adapter: EntityAdapter<ExampleFeature2> =
  createEntityAdapter<ExampleFeature2>()

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  error: null,
})

export const reducer = createReducer(
  initialState,
  on(ExampleFeature2Actions.addMockDataEntry, (state, action) =>
    adapter.addOne(action.mockDataEntry, state)
  ),
  on(ExampleFeature2Actions.upsertMockDataEntry, (state, action) =>
    adapter.upsertOne(action.mockDataEntry, state)
  ),
  on(ExampleFeature2Actions.addMockDataEntries, (state, action) =>
    adapter.addMany(action.mockDataEntries, state)
  ),
  on(ExampleFeature2Actions.upsertMockDataEntries, (state, action) =>
    adapter.upsertMany(action.mockDataEntries, state)
  ),
  on(ExampleFeature2Actions.updateMockDataEntry, (state, action) =>
    adapter.updateOne(action.mockDataEntry, state)
  ),
  on(ExampleFeature2Actions.updateMockDataEntries, (state, action) =>
    adapter.updateMany(action.mockDataEntries, state)
  ),
  on(ExampleFeature2Actions.deleteMockDataEntry, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(ExampleFeature2Actions.deleteMockDataEntries, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(ExampleFeature2Actions.setMockDataEntries, (state, action) =>
    adapter.setAll(action.mockDataEntries, state)
  ),
  on(ExampleFeature2Actions.clearMockDataEntries, (state) =>
    adapter.removeAll(state)
  ),
  on(ExampleFeature2Actions.addExampleEntity, (state, { entity }) =>
    adapter.addOne(entity, state)
  ),
  on(ExampleFeature2Actions.removeExampleEntity, (state, { id }) =>
    adapter.removeOne(id, state)
  )
)

export const exampleFeature2sFeature = createFeature({
  name: exampleFeature2sFeatureKey,
  reducer,
  extraSelectors: ({ selectExampleFeature2sState }) => ({
    ...adapter.getSelectors(selectExampleFeature2sState),
  }),
})

export const { selectIds, selectEntities, selectAll, selectTotal } =
  exampleFeature2sFeature
