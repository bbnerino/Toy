import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { TodoContext } from '../store/todos'

const Wow = () => {
  const context = useContext(TodoContext)
  console.log(context)
  return (
    <div>
      <h1>Wow</h1>
    </div>
  )
}

export default Wow
