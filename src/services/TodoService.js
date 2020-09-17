import axios from 'axios'


class TodoService {
    constructor(){
        this.URL = 'http://localhost:3003/api/todos'
    }

    async getTodos(){
        try {
            const resp =  await  axios.get(this.URL)
            console.log(resp.data)
            return await resp.data
        }catch(err){
            return false
        }
    }

    async createTodo(todo){
        try {
            const resp = await axios.post(this.URL, todo)
            return resp
        } catch (error) {
            return error.message
        }
    }


    async deleteTodo(todoId){
        try {
            const resp = await axios.delete(`${this.URL}/${todoId}`)

            if(resp.status === 204){
                return resp
            }
        }catch(err){
            console.log(err)
            return err.message
        }
    }
}


export default new TodoService()