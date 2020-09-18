import React, { useEffect, useState } from 'react'
import PageHeader from '../layout/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'



import TodoService from '../../services/TodoService'
import './todo.css'

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
            await refresh(description)
        }
        
    }


    const handleClear = async () => {
        await refresh()
    }


    const refresh = async (description = '') => {

        if(description){
            const data = await TodoService.searchTodo(description)
            console.log(todos)
            setTodos(data)
            
        }else{
            const resp = await TodoService.getTodos()
            setTodos(resp)
        }

        setDescription(description)

        
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

    const handleMarkAsDone = async (todo) => {
        await TodoService.markAsDone(todo)
        await refresh(description)
    }


    const handleMarkAsPending = async (todo) => {
        await TodoService.markAsPending(todo)
        await refresh(description)
    }


    const handleSearch = async () => {
        await refresh(description)
    } 




    return (
        <div className="todo">
            <div className="container">
                <PageHeader name="Todo" small="Cadastrar" />
                <TodoForm handleAdd={handleAdd} handleChange={handleChange}  description={description} handleSearch={handleSearch} handleClear={handleClear} />
                <TodoList todos={todos} handleRemove={handleRemove} handleMarkAsDone={handleMarkAsDone} handleMarkAsPending={handleMarkAsPending}  />
            </div>
        </div>
    )
}