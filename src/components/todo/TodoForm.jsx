import React from 'react'

import Grid from '../layout/Grid'
import IconButton from '../layout/IconButton'

export default props => {
    const keyHandler = (evt) => {
        if(evt.key === 'Enter'){
            evt.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(evt.key === "Escape"){
            props.handleClear()
        }
    }


    return (
        <div role="form" className="todo-form ml-8">
            <div className="row">
                <Grid xs={12} sm={9} md={10}>
                    <input type="text" value={props.description} className="form-control" onChange={props.handleChange} placeholder="Adicione uma tarefa" onKeyUp={keyHandler}/>
                </Grid>
                <Grid xs={12} sm={3} md={2}>
                    <IconButton iconClass="fa fa-plus" onClick={props.handleAdd} />
                    <IconButton iconClass="fas fa-search" onClick={() => props.handleSearch()} />
                    <IconButton iconClass="fas fa-eraser" onClick={() => props.handleClear()} />
                </Grid>
            </div>
        </div>
    )
}