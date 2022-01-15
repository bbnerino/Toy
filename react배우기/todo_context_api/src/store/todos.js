import { createContext } from 'react'
export const TodoContext = createContext()

const TodoStore = (props) => {
  const todos = [{
    name:"리액트하기",
    done:false
  }]
  return (
    <TodoContext.Provider value={todos}>
      {props.children}
    </TodoContext.Provider>
    )
}

export default TodoStore
