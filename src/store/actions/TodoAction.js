import TodoService from '../../services/TodoService'
import {DESCRIPTION_CHANGED, SEARCHED_TODOS, TODO_CLEAR, TODO_MARKED_AS_DONE, TODO_MARKED_AS_PENDING, TODO_REMOVED} from '../actions/actionTypes'



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


const add =  async description => {
    if(description){
        const resp = await TodoService.createTodo({description})
        return [{type: TODO_CLEAR, payload: resp.data}, await search()]
    }
}


const remove = async todo => {
    if(todo) {
        const resp = await TodoService.deleteTodo(todo._id)

        if(resp.status === 204) {
            return [{type: TODO_REMOVED, payload: resp.data}, await search()]
        }
    }
}


const markAsDone = async todo => {
    if(todo){
        const resp = await TodoService.markAsDone(todo)
        return [{type: TODO_MARKED_AS_DONE, payload: resp.data}, await search(todo.description)]
    }
}


const markAsPending = async todo => {
    if(todo){
        const resp = await TodoService.markAsPending(todo)
        return [{type: TODO_MARKED_AS_PENDING, payload: resp.data}, await search(todo.description)]
    }
}

const clear = async () => ([{type: TODO_CLEAR},await search()])



export {changeDescription, search,add, remove, markAsDone, markAsPending, clear}