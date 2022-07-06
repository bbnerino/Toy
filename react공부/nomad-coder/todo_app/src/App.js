import './App.css';
import { useState} from 'react'

function App() { 
  const [newtodo,setnewTodo]=useState("")
  const [todos,setTodos]=useState([
    {text:'할일하기',id:0,complete:false},
    {text:'설거지',id:1,complete:false},
    {text:'밥하기',id:2,complete:true}
  ])
  const onChange = (e)=>{
    setnewTodo(e.target.value)
  }
  const onClick = ()=>{
    if (newtodo===""){return}
    const newTodos = [...todos,
      {text:newtodo,id:Date.now(),complete:false}
    ]

    setTodos(newTodos)
    setnewTodo('')
  }
  const deleteTodo = (index)=>{
    const newTodos = todos.filter(todo=>(todo.id!==index))
    setTodos(newTodos)
  }
  const onComplete = (index)=>{
    setTodos(todos.map(todo=>
      todo.id === index ? {...todo,complete:!todo.complete}:todo))
  }
  const todolist = todos.map(todo => 
  <li className={todo.complete&&"complete"} key={todo.id} onClick={()=>onComplete(todo.id)} onDoubleClick={()=>deleteTodo(todo.id)}>{todo.text}</li>)
  
  return (
    <div>
     <input onChange={onChange} onKeyPress={(e)=>{if(e.key==='Enter'){onClick()}}}
     value={newtodo} type="text" placeholder='Write todo'/>
     <br></br>
     <button onClick={onClick}>추가하기</button>
     <ul>
       {todolist}
     </ul>
    
    </div>
  );
}

export default App;
