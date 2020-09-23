import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Grid from '../layout/Grid'
import IconButton from '../layout/IconButton'
import {changeDescription, search} from '../../store/actions/TodoAction'

const TodoForm = props => {
    const keyHandler = (evt) => {
        if (evt.key === 'Enter') {
            evt.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (evt.key === "Escape") {
            props.handleClear()
        }
    }



    useEffect(() => {
        const fecthTodos = async () => await props.searchTodos()
        fecthTodos()
    })



    return (
        <div role="form" className="todo-form ml-8">
            <div className="row">
                <Grid xs={12} sm={9} md={10}>
                    <input type="text" value={props.description} className="form-control" onChange={e => props.onChangeDescription(e.target.value)} placeholder="Adicione uma tarefa" onKeyUp={keyHandler} />
                </Grid>
                <Grid xs={12} sm={3} md={2}>
                    <IconButton iconClass="fa fa-plus" onClick={props.handleAdd} />
                    <IconButton iconClass="fas fa-search" onClick={() => props.searchTodos(props.description)} />
                    <IconButton iconClass="fas fa-eraser" onClick={() => props.searchTodos()} />
                </Grid>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {description: state.todo.description}
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeDescription(newDescription){
            const action = changeDescription(newDescription)
            dispatch(action)
        },

        async searchTodos(description = "") {
            const action = await search(description)
            dispatch(action)
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)