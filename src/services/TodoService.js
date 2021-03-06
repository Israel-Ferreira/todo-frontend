import axios from 'axios'


class TodoService {
    constructor(){
        this.URL = 'http://localhost:3003/api/todos'
    }

    async getTodos(){
        try {
            const resp =  await  axios.get(this.URL)
            return await resp.data
        }catch(err){
            return false
        }
    }

    async searchTodo(description){
        try {
            const resp = await axios.get(`${this.URL}?description__regex=/${description}/`)

            return await resp.data
        } catch (error) {
            return error.message
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

    async markAsDone(todo){
        try{
            const resp = await axios.put(`${this.URL}/${todo._id}`, {...todo, done: true})
            return resp
        }catch(err){
            return err.message
        }
    }


    async markAsPending(todo){
        try {
            const resp = await axios.put(`${this.URL}/${todo._id}`, {...todo, done: false})
            return resp
        }catch(err){
            return err
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