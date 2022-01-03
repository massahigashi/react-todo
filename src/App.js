import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const getKey = () => Math.random().toString(32).substring(2);

function Todo() {
  const[items, setItems] = React.useState([
    {key: getKey(), text: 'Learn JavaScript', done: false},
    {key: getKey(), text: 'Learn React', done: false},
    {key: getKey(), text: 'Get some good sleep', done: false},
  ]);

  const handleAdd =(text)=>{
    setItems([...items, {key: getKey(), text, done: false}]);
  };

  const handleCheck = (checked) =>{
    const newItems = items.map(item=>{
     if(item.key === checked.key) {
       item.done = !item.done;
      }
     return item;
    });
    setItems(newItems);
  };
  
 /* JSX */ 
 return (
    <div className="panel">
      <div className ="panel-heading">
        ⚛️ React To Do
      </div>
      <Input onAdd={handleAdd} />
      {items.map(item =>(
        <TodoItem 
           key={item.key} 
           item={item} 
           onCheck={handleCheck}
           />
      ))}
      <div className="panel-block">
        {items.length} items
      </div>
    </div>
  );

}
function TodoItem({ item, onCheck }) {
  const handleChange= ()=>{
    onCheck(item);
  };

  return (
    <label className="panel-block">
      <input type="checkbox" 
              checked={item.done}
              onChange={handleChange}
      />
      <span className={item.done ? 'has-text-grey-light' : ''}>
        {item.text}
      </span>
    </label>
  );
}

function App() {
  return(
    <div className="container is-fluid">
      <Todo />
    </div>
  );
}

function Input({onAdd}) {
  const [text, setText] = React.useState('');

  const handleChange =(event)=>setText(event.target.value);
  const handleKeyDown=(event)=>{
    if(event.key === 'Enter') {
      onAdd(text);
      setText('');
    }
  };

  return(
    <div className='panel-block'>
      <input
        class="input"
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange} 
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default App;
