import React, {useEffect} from 'react'
import IconButton from '../layout/IconButton'
import {connect} from 'react-redux'

import {markAsDone, markAsPending, remove, search}  from '../../store/actions/TodoAction'

const TodoList = props => {

    useEffect(() => {
        const fecthTodos = async () => await props.searchTodos()
        fecthTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const RenderRows = (list) => {
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td className="table-actions-buttons">
                    <IconButton btnStyle="danger" iconClass="fas fa-trash" onClick={() => props.removeTodo(todo)} />
                    <IconButton btnStyle="success" iconClass="fas fa-check" onClick={() => props.markAsDone(todo)} hide={todo.done} />
                    <IconButton btnStyle="warning" iconClass="fas fa-undo" onClick={() => props.markAsPending(todo)} hide={!todo.done} />
                </td>

            </tr>
        ))
    }

    return (
        <div className="todo-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className="table-actions">Ações</th>
                    </tr>

                </thead>
                <tbody>
                    {RenderRows(props.todos)}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {list, description} = state.todo
    return {todos: list, description}
}

const mapDispatchToProps = dispatch => {
    return {
        async searchTodos(description = "") {
            const action = await search(description)
            dispatch(action)
        },

        async removeTodo(todo){
            const action = await remove(todo)
            dispatch(action)
        },

        async markAsDone(todo){
            const action = await markAsDone(todo)
            dispatch(action)
        },

        async markAsPending(todo){
            const action = await markAsPending(todo)
            dispatch(action)
        }


    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


