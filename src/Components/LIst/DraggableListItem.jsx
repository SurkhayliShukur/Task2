import React from 'react'
import PropTypes from 'prop-types'


const DraggableListItem = props => {
  return (
    <li className='draggable-list__item'>
        {props.children}
    </li>
  )
}

DraggableListItem.propTypes = {

}

export default DraggableListItem