import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
const User = ()=>{
  const {id} = useParams()
  const [user,setUser] = useState(null)
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users/"+id)
    .then(response=>{
      console.log(response.data)
      setUser(response.data)
    }).catch((error)=>{console.log(error)})
  },[])
  return(
    <div>
      <h1>유저{id}</h1>
      {user &&
      <><h1>{user.name}</h1>
      <h1>{user.email}</h1></>
      }
    </div>
  )
}
export default User