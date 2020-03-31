import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { jsonapiModule } from '../../../../src/jsonapi-vuex'
import * as devices from './devices'
import _ from 'lodash'

const api = axios.create({
  // connect to local jsonapi-mock server
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/vnd.api+json',
    Accept: 'application/vnd.api+json',
  },
})

Vue.use(Vuex)

export const storeConfig = {
  modules: {
    devices: _.merge(devices, jsonapiModule(api, { clearOnUpdate: true })),
  },
}

const store = new Vuex.Store(storeConfig)

export default store
