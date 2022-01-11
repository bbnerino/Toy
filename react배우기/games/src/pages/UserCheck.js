import { useContext } from "react"
import {Usercontext,setUserContext} from "../store/users"
const UserCheck = ()=>{
  const context = useContext(Usercontext)
  const setUsers = useContext(setUserContext)
  console.log(context)
  return (
    <div>
      <div className="container">
        <h1>{context.name}</h1>
        <h1>{context.job}</h1>
        <h1>{context.age}살</h1>
        <button onClick={()=>setUsers({...context,age:context.age+1})} >나이먹기</button>
      </div>
    </div>
  )
}
export default UserCheck