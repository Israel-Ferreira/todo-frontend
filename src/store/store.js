import {createStore, combineReducers, applyMiddleware} from 'redux'
import multi from 'redux-multi'

import thunk from 'redux-thunk'


import TodoReducer from './reducers/TodoReducer'




const reducers = combineReducers({
    todo: TodoReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk)(createStore)(reducers, devTools)


export default store