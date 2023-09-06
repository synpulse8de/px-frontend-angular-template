import { reducer, initialState } from './example-feature-1.reducer'

describe('ExampleFeature1 Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any

      const result = reducer(initialState, action)

      expect(result).toBe(initialState)
    })
  })
})
