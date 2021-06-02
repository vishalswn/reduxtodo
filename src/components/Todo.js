import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { addTodo,deleteTodo,removeTodo } from '../actions/index'
function Todo() {
  const [inputData,setInputdata] = useState('');
  const list = useSelector((state)=>state.todoReducers.list) 
  const dispatch = useDispatch();
  
  return (
    <>
      <h1>todolist</h1>
      <div className="add-Items">
        <input type="text" value={inputData} onChange={(event)=>setInputdata(event.target.value)} placeholder="...Add items"/>
        <i className="fa fa-plus add-btn" onClick={()=>dispatch(addTodo(inputData),
          setInputdata('')
          )}></i>
      </div>
      <div className="showItems">
        {
          list.map((elem)=>{
            return (
            <div className="eachItem" key={elem.id}>
            <h3>{elem.data}</h3>
            <div className="todo-btn">
              <i className="fa fa-trash-alt add-btn" title="Delete Item" onClick={()=>dispatch(deleteTodo(elem.id) )}></i>
            </div>
            </div>
            )
          })
        }
      </div>
      <div className="todo-btn">
        <button className="btn effect04" title="Delete Item" onClick={()=>dispatch(removeTodo() )}>Check List</button>
      </div>
    </>
  );
}

export default Todo;
