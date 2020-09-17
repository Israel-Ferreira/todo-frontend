import React from 'react'
import IconButton from '../layout/IconButton'



export default props => {
    const RenderRows = (list) => {
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton btnStyle="danger" iconClass="fas fa-trash" onClick={() => props.handleRemove(todo._id)} />
                </td>
            </tr>
        ))
    }

    return (
        <div className="todo-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {RenderRows(props.todos)}
                </tbody>
            </table>
        </div>
    )
}
