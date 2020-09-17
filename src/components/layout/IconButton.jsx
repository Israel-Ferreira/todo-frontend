import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const IconButton = (props) => {
    console.log(props.hide)
    if (props.hide) {
        return null
    } else {
        return (
            <Fragment>
                <button className={`btn btn-${props.btnStyle}`} onClick={props.onClick}>
                    <i className={props.iconClass}></i>
                </button>
            </Fragment>
        )
    }
}



IconButton.propTypes = {
    hide: PropTypes.bool,
    btnStyle: PropTypes.string,
    iconClass:  PropTypes.string,
    onClick:  PropTypes.func
}


IconButton.defaultProps = {
    hide: false, 
    btnStyle: "primary"
}



export default IconButton

