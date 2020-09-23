import React from 'react'
import IconButton from '../layout/IconButton'
import {connect} from 'react-redux'

const TodoList = props => {
    const RenderRows = (list) => {
        console.log(list)
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td className="table-actions-buttons">
                    <IconButton btnStyle="danger" iconClass="fas fa-trash" onClick={() => props.handleRemove(todo._id)} />
                    <IconButton btnStyle="success" iconClass="fas fa-check" onClick={() => props.handleMarkAsDone(todo)} hide={todo.done} />
                    <IconButton btnStyle="warning" iconClass="fas fa-undo" onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done} />
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
    return {todos: state.todo.list}
}





export default connect(mapStateToProps)(TodoList)


