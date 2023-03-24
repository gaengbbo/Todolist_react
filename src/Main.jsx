import React, { useContext, useReducer, useState } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import Items from './Items';
import './TodoList.css';

//reduce 은행
//dispatch 요구
//action 요구의 내용

const reducer = (state, action) => {
  switch(action.type) {
    case 'add_item':
      const item = action.payload;
      const newItem = {
        id: Date.now(),
        item,
        isCompleted: false,
      }
      return [...state, newItem]
    case 'delete_item':
      return [...state.filter(itemList => itemList.id !== action.payload.id)]
    case 'completed_item': 
      return state.map((item) => {
        if(item.id === action.payload.id) {
          return {...item, isCompleted: !item.isCompleted }
        }
        return item;
      })
    default:
      return state;  
  };
};

const initialItems = [
];


export default function Main({clicked, setClicked}) {
  const [item, setItem] = useState('');
  const [itemList, dispatch] = useReducer(reducer, initialItems);

  const {isDark} =useContext(DarkModeContext);

  return (
    <div id="main">
      <div id="list_wrap">
        <ul>
          {itemList.map((list) =>{
              return (
                <Items 
                  key={list.id} 
                  item={list.item} 
                  dispatch={dispatch} 
                  id={list.id}
                  isCompleted={list.isCompleted}
                />)     
             })}
          </ul>
        </div> 
        <div id='addItem_wrap' 
          style={{
          backgroundColor: isDark ? '#303059' : '#bbbbc9'}} 
        >
          <input 
            id="addItem" 
            type="text" 
            value={item} 
            onChange={(e)=> setItem(e.target.value)}
          />

          <button 
            id='addItem_btn' 
            style={{backgroundColor: isDark ? '#bbbbc9' : '#303059',
            color: isDark ? '#303059' : '#bbbbc9'}}
            onClick={() => {
              dispatch({type: 'add_item', payload: item})
            }}
            >+</button>
      </div>
    </div>

  );


}