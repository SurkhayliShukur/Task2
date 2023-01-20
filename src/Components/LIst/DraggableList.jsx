import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DraggableListItem';
import './draggable-list.css';
import DraggableListItem from './DraggableListItem';

const DraggableList = props => {
    const [data, setData] = useState(props.data)

    const [dragStartIndex, setdragStartIndex] = useState(null);

    const onDragStart = (index) => setdragStartIndex(index)

    const onDrop = (dropIndex) => {
        const dragItem = data[dragStartIndex]
        let list = [...data]
        list.splice(dragStartIndex, 1)
        
        if (dragStartIndex < dropIndex) {
            setData([
                ...list.slice(0, dropIndex - 1),
                dragItem,
                ...list.slice(dropIndex - 1, list.length)
            ])
        } else {
            setData([
                ...list.slice(0, dropIndex),
                dragItem,
                ...list.slice(dropIndex, list.length)
            ])
        }

    }


    return (
        <ul className='draggable-list'>
            {
                data.map((item, index) => (
                    <DraggableListItem
                        key={index}
                        index={index}
                        onDragStart={(index) => onDragStart(index)}
                        onDrop={(index) => onDrop(index)}
                    >
                        {
                            props.renderItemContent(item)
                        }
                    </DraggableListItem>
                ))
            }

            <DraggableListItem
                key={data.length}
                index={data.length}
                draggale={false}
                onDrop={(index) => onDrop(index)}

            />

        </ul>
    )
}

DraggableList.propTypes = {
    data: PropTypes.array,
    renderItemContent: PropTypes.func
}

export default DraggableList