import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from '../actions'
import api from 'src/api'

jest.mock('src/api')

Vue.use(Vuex)

describe('Test Devices', () => {
  test('isRegistered exists', () => {
    expect(actions.isRegistered).toBeDefined()
  })
  test('isRegistered ', async () => {
    let state = {
      devices: {
        1: {
          name: 'abc',
        },
      },
    }

    let store = new Vuex.Store({
      modules: {
        devices: {
          state,
          actions,
        },
      },
    })
    api.mockReturnValue(true)
    let registered = await actions.isRegistered(store, 'abc')
    expect(api).toHaveBeenCalledTimes(1)
    expect(registered).toBe(true)
  })
})
