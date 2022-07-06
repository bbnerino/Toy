import {useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Users = ()=>{
  const [users,SetUsers] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
      SetUsers(response.data)
    }).catch((error)=>{console.log(error)})
  },[])
  
  const Userlist = users.map(user=>{
      return (
        <div key={user.name}>
          <h1 >
            <Link to={`${user.id}`}>
              {user.name}   
            </Link>
          </h1>
          
        </div>
    )
  })
  
  return (
    <div className="container">
      <h1>유저들</h1>
      {Userlist}
    </div>
  )
}
export default Users

