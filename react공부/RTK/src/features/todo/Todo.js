import {React,useState} from 'react'
import { ADDTODO,REMOVETODO,UPDATETODO } from './todoSlice'
import { useSelector,useDispatch } from 'react-redux'
import './Todo.css'
const Todo = () => {
  const todos = useSelector(state=>state.todo.todos)
  const dispatch = useDispatch()
  const [value,setValue] = useState('')
  const addtodo = ()=>{
    dispatch(ADDTODO({title:value,done:false,id:Date.now()}))
    setValue("")
  }
  return (
    <>
      <div>
        <h1>TODOPAGE</h1>
          {todos.map((todo,i)=>
          <div key={todo.id}>
              <h4 className={todo.done ? "done":"yet"} onDoubleClick={()=>dispatch(UPDATETODO(todo.id))}>{i+1}.{todo.title}</h4>
              <button onClick={()=>dispatch(REMOVETODO(todo.id))} > 삭제</button>
          </div>)}
      </div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          addtodo() }}>
          <input 
          value={value} 
          onChange={(e)=>setValue(e.target.value)}
          />
          <button type='submit'>
            추가하기
          </button>
        </form>
    </>
  )
}

export default Todo
