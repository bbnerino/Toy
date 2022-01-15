import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { TodoContext } from '../store/todos'
import './Navbar.scss'

const Navbar = () => {
  const context = useContext(TodoContext)
  console.log(context)
  return (
    <div className='Navbar'>
      <Link to="/">투두리스트</Link>
      <div className='blank'></div>
      <Link to="/check">체크</Link>
    </div>
  )
}

export default Navbar