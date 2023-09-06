import { reducer, initialState } from './example-feature-2.reducer'

describe('ExampleFeature2 Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any

      const result = reducer(initialState, action)

      expect(result).toBe(initialState)
    })
  })
})
