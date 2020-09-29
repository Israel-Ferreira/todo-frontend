import {DESCRIPTION_CHANGED, SEARCHED_TODOS, TODO_CLEAR} from '../actions/actionTypes'

const initialState = {
    description: '',
    list: []
}


const TodoReducer =  (state = initialState, action) => {
    switch(action.type){
        case DESCRIPTION_CHANGED:
            return {...state, description: action.payload}
        case SEARCHED_TODOS:
            return {...state, list: action.payload} 
        case TODO_CLEAR:
            return {...state, description: ''}
        default:
            return state
    }
}

export default TodoReducer