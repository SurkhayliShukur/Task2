import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './DraggableListItem';
import './draggable-list.css';
import DraggableListItem from './DraggableListItem';

const DraggableList = props => {
    const [data,setData] = useState(props.data)
  return (
    <ul className='draggable-list'>
        {
            data.map((item, index) =>(
                <DraggableListItem key={index}>
                    {
                        props.renderItemContent(item)
                    }
                </DraggableListItem>
            ))
        }

    </ul>
  )
}

DraggableList.propTypes = {
    data: PropTypes.array,
    renderItemContent: PropTypes.func
}

export default DraggableList