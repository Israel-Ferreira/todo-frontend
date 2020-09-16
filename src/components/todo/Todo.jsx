import React from 'react'
import PageHeader from '../layout/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default (props) => {
    return (
        <div className="todo">
            <PageHeader name="Todo" small="Cadastrar" />
            <TodoForm />
            <TodoList />
        </div>
    )
}