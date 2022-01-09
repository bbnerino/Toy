import { useState,useRef, useCallback} from 'react';
import './App.css';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [todos,setTodos]= useState([
    {id:1,
    text:'리액트하기',
    checked:true},
    {id:2,
      text:'리액트또하기기',
      checked:false},
  ])
  const nextId = useRef(4);
  const onInsert = useCallback(
    text=>{
      const todo= {
        id:nextId.current,
        text,
        checked:false
      }
      setTodos(todos.concat(todo))
      nextId.current+=1;
    }
  ,[todos])
  const onRemove = useCallback(
    id => {
      const newtodos = todos.filter(todo=>todo.id!==id)
      setTodos(newtodos)
    },[todos]
  )
  const onToggle = useCallback(
    id =>{
      setTodos(
        todos.map(todo=>todo.id === id ? 
          {...todo,checked:!todo.checked}:todo)
      )
    },[todos]
  )
  const 꺼내온거 = useSelector((state)=>state)
  const dispatch = useDispatch()
  return (
    <div>
      <p>{꺼내온거}</p>
      <button onClick={()=>{dispatch({type:'증가'})}}>더하기</button>
      <button onClick={()=>{dispatch({type:'감소'})}}>빼기</button>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList onToggle={onToggle} onRemove={onRemove} todos={todos}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
