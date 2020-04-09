import React from 'react'
import PropTypes from 'prop-types'
import './Tag.css'
const Tag = ({name}) => {
    return (
        <span className='s-tag m-1'>{name}</span>
    )
}

Tag.propTypes = {

}

export default Tag
