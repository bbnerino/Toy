import { useState, useCallback } from 'react'
import {FaFly} from 'react-icons/fa'
import './TodoInsert.scss'

const TodoInsert = ({onInsert})=>{
  const [value,setValue] = useState('')
  const onChange = useCallback((e)=>{
    setValue(e.target.value)
  },[])
  const onSubmit = useCallback(
    e=>{
      onInsert(value)
      setValue('')
      e.preventDefault();
    }
  ,[onInsert,value])
  return (
    <>
      <form onSubmit={onSubmit} className='TodoInsert'>
        <input 
        value = {value}
        onChange={onChange}
        placeholder='할일을 입력하세요'/>
        <button onClick={onSubmit} type='submit'>
          <FaFly/>
        </button>
      </form>
    </>
  )
}
export default TodoInsert