import React, { useState } from 'react';
import './TodoList.css';

const initialItems = [
  {
    item:'공복운동',
    id: '1234',
  }
];


export default function Main_copy() {
  return (
    <div id="main">
      <div id="list_wrap">
        <ul>
            <li key={initial} className='list_content' >
              <span className='list_item'>{initialItems[0].item}</span>
              <button className='list_deletBtn'>-</button>
            </li>
        </ul>
      </div> 
        <form id='addItem_wrap'>
        <input id="addItem" type="text" />
        <button id='addItem_btn' type='submit'>+</button>
      </form>
    </div>
  );
}