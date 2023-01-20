import React, { useRef } from 'react'
import PropTypes from 'prop-types'


const DraggableListItem = props => {
  
  const itemRef = useRef(null)

// Drag start function
  const onDragStart = (e) => {

    e.dataTransfer.effectedAllowed = 'move'
    e.dataTransfer.setDragImage(e.target, 50000, 50000)

    let ghostNode = e.target.cloneNode(true)

    ghostNode.style.position = "absolute"

    ghostNode.style.top = (e.pageY - e.target.offsetHeight / 2) + 'px'
    ghostNode.style.left = (e.pageX - e.target.offsetWidth / 2) + 'px'

    ghostNode.style.height = e.target.offsetHeight + 'px'
    ghostNode.style.width = e.target.offsetWeight + 'px'


    ghostNode.style.opacity = '0.8'
    ghostNode.style.pointerEvents = 'none'

    ghostNode.id = 'ghostNode'


    document.body.prepend(ghostNode)

    itemRef.current.classList.add('dragstart')


    if(props.onDragStart){
      props.onDragStart(props.index)
    }
  }

// onDrag function
  const onDrag = (e) =>{
     let ghostNode = document.querySelector('#ghostNode')
     ghostNode.style.top = (e.pageY - e.target.offsetHeight / 2) + 'px'
     ghostNode.style.left = (e.pageX - e.target.offsetWidth / 2) + 'px'
  }
// onDragEnd  function
   const onDragEnd = () =>{
    document.querySelector('#ghostNode').remove()
    itemRef.current.classList.remove('dragstart')
   }
   // onDragEnter  function
   const onDragEnter = () => itemRef.current.classList.add('dragover')
  // onDragLeave  function
   const onDragLeave = () => itemRef.current.classList.remove('dragover')
   // onDragOver  function
   const onDragOver = (e) => e.preventDefault()
     // onDrop  function
   const onDrop = () => {
     itemRef.current.classList.remove('dragover')
     props.onDrop(props.index)
   }


  return (
    <li
      ref={itemRef}
      className='draggable-list__item'
      draggable={props.draggable !== undefined ? props.draggable : true}
      onDragStart={onDragStart}
      onDrag = {onDrag}
      onDragEnd = {onDragEnd}
      onDragEnter = {onDragEnter}
      onDragLeave = {onDragLeave}
      onDragOver = {onDragOver}
      onDrop = {onDrop}

    >
      {props.children}
    </li>
  )
}

DraggableListItem.propTypes = {
  draggable: PropTypes.bool,
  index: PropTypes.number,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func
}

export default DraggableListItem