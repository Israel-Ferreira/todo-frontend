import React from 'react'
import PageHeader from '../layout/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


import './todo.css'

export default (props) => {
    return (
        <div className="todo">
            <div className="container">
                <PageHeader name="Todo" small="Cadastrar" />
                <TodoForm  />
                <TodoList  />
            </div>
        </div>
    )
}