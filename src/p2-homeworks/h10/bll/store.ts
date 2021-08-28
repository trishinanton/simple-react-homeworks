import {loadingReducer} from './loadingReducer'
import { combineReducers,createStore } from 'redux'

const reducers = combineReducers({
    loading: loadingReducer,

})

const store = createStore(reducers)

export default store
type ReducerType = typeof reducers
export type AppStoreType = ReturnType<ReducerType>

// @ts-ignore
window.store = store // for dev
