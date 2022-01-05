import TodoListItem from './TodoListItem'
import './TodoList.scss'

const Todolist = ({todos,onRemove,onToggle}) =>{
  return (
    <div className='TodoList'>
      {todos.map(todo=>(
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  )
}
export default Todolist