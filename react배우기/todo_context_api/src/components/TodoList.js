import React from 'react'
import { useContext } from 'react'
import TodoContext from '../store/todos'

const TodoList = () => {
  const context = useContext(TodoContext)
  console.log(context)
  return (
    <div>
      <h1>전체 투두리스트입니다</h1>
    </div>
  )
}

export default TodoList
