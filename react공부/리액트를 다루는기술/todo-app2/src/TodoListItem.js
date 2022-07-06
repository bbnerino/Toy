import {MdCheckBoxOutlineBlank,
        MdCheckBox,
        MdRemoveCircleOutline,
} from 'react-icons/md'
import './TodoListItem.scss'
import cn from 'classnames'
const TodoListItem =({onToggle,onRemove,todo})=>{
  const {text,checked,id} = todo
  return (
    <div className='TodoListItem'>
      <div onClick={()=>onToggle(id)} className={cn('checkbox',{checked})}>
        {checked? <MdCheckBox/>:<MdCheckBoxOutlineBlank/>}
        <div className='text'>{text}</div>
      </div>
      <div onClick={()=>onRemove(id)}  className='remove'>
        <MdRemoveCircleOutline/>
      </div>
    </div>
  )
}
export default TodoListItem