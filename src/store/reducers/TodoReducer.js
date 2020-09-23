import {DESCRIPTION_CHANGED, SEARCHED_TODOS} from '../actions/actionTypes'

const initialState = {
    description: 'Ler Livro',
    list: [
        {_id: 1, description: "Fazer Café", done: false},
        {_id: 2, description: "Estudar React", done: true},
        {_id: 3, description: "Estudar Node.js", done: false},
        {_id: 4, description: "Fazer a atividade de MPC", done: false}
    ]
}


const TodoReducer =  (state = initialState, action) => {
    console.log(state, action)
    switch(action.type){
        case DESCRIPTION_CHANGED:
            return {...state, description: action.payload}
        case SEARCHED_TODOS:
            return {...state, list: action.payload} 
        default:
            return state
    }
}

export default TodoReducer