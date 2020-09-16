import React from 'react'

export default ({name, small}) => (
    <div className="pb-2 mt-4 mb-2 border-bottom">
        <h2>{name} <small className="text-muted">{small}</small></h2> 
    </div>
)