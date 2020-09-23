import {createStore, combineReducers} from 'redux'
import TodoReducer from './reducers/TodoReducer'

const reducers = combineReducers({
    todo: TodoReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers, devTools)


export default store