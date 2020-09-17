import React  from 'react'
import PropTypes from 'prop-types'
import If from './If'

const IconButton = (props) => (
    <If test={!props.hide}>
        <button className={`btn btn-${props.btnStyle}`} onClick={props.onClick}>
            <i className={props.iconClass}></i>
        </button>
    </If>
)



IconButton.propTypes = {
    hide: PropTypes.bool,
    btnStyle: PropTypes.string,
    iconClass: PropTypes.string,
    onClick: PropTypes.func
}


IconButton.defaultProps = {
    hide: false,
    btnStyle: "primary"
}



export default IconButton

