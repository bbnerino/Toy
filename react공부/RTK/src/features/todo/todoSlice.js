import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos : [
    {title:"리액트해야지",done:true,id:10},
    {title:"언제잘까",done:false,id:12}
  ]
}
export const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers:{
    ADDTODO : (state,action)=>{
      console.log(action)
      state.todos.push(action.payload)
    },
    REMOVETODO : (state,action)=>{
      state.todos = state.todos.filter((todo)=> todo.id!==action.payload)
    },
    UPDATETODO : (state,action)=>{
      state.todos = state.todos.map((todo)=> todo.id===action.payload? {...todo,done:!todo.done}:todo)
    }
  }
})
export const {ADDTODO,REMOVETODO,UPDATETODO} = todoSlice.actions
export default todoSlice.reducer