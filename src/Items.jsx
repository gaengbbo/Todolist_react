import React from 'react';

const Items = ({item, dispatch, id, isCompleted }) => {
  return (
    <li className='list_content' >
      <span 
        className='list_item' 
        style={{textDecoration: isCompleted ? 'line-through': 'none',
        textDecorationColor: isCompleted ? 'red' : 'none'
        }}
        onClick={()=> 
        dispatch({type: 'completed_item', payload: {id}})}>{item}</span>
      <button className='list_deletBtn' 
       onClick={() => {
        dispatch({type: 'delete_item', payload: {id}})
       }}>-</button>
    </li> 
  );
}

export default Items;