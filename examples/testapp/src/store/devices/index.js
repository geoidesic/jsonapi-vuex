import stateImport from './state'
import * as getterImport from './getters'
import * as mutationImport from './mutations'
import * as actionImport from './actions'

export const namespaced = true
export const state = stateImport
export const getters = getterImport
export const mutations = mutationImport
export const actions = actionImport
