import React, { useEffect, useState } from 'react'
import PageHeader from '../layout/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


import TodoService from '../../services/TodoService'


export default (props) => {
    const [todos, setTodos] = useState([])
    const [description, setDescription] = useState('')


    useEffect(() => {
        async function fetchTodos(){
            const data = await TodoService.getTodos()
            setTodos(data)
        }

        fetchTodos()
    }, [])


    const handleRemove = async (todoId) => {
        const resp = await TodoService.deleteTodo(todoId)

        if(resp.status === 204){
            await refresh()
        }
        
    }


    const refresh = async () => {
        const resp = await TodoService.getTodos()
        setTodos(resp)
        setDescription('')
    }


    const handleAdd = async () => {
        const newTodo = {description}
        const resp = await TodoService.createTodo(newTodo)


        if(resp.status === 201){
            await refresh()
        }
    }

    const handleChange = (evt) => {
        setDescription(evt.target.value)
    }




    return (
        <div className="todo">
            <div className="container">
                <PageHeader name="Todo" small="Cadastrar" />
                <TodoForm handleAdd={handleAdd} handleChange={handleChange}  description={description} />
                <TodoList todos={todos} handleRemove={handleRemove} />
            </div>
        </div>
    )
}