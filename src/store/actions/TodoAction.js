import TodoService from '../../services/TodoService'
import {DESCRIPTION_CHANGED, SEARCHED_TODOS} from '../actions/actionTypes'

const search = async (description = "")  => {
    let data  = []

    if(description){
        data = await TodoService.searchTodo(description)
    }else{
        data = await TodoService.getTodos()
    }


    return {type: SEARCHED_TODOS, payload: data}
}



const changeDescription = newDescription => {
    return {
        type: DESCRIPTION_CHANGED,
        payload: newDescription
    }
}


export {changeDescription, search}