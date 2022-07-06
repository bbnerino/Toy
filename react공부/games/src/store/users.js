import React,{createContext, useState} from 'react'

export const Usercontext = createContext()
export const setUserContext = createContext(()=>{})

const UserStore=(props)=>{
  const [users,setUsers] = useState({
    name:'hey-hey',
    job :'developer',
    age : 28
  })
  return (
    <setUserContext.Provider value={setUsers}>
      <Usercontext.Provider value={users}>
        {props.children}          
      </Usercontext.Provider>
    </setUserContext.Provider>
  )
}
export default UserStore