import {NavLink,Route} from 'react-router-dom'
import Profile from './Profile'

const Profiles = () =>{
  const activeStyle ={
    background:'white',
    color:'black'
  }
  return (
    <div>
      <h1>사용자 목록</h1>
      <ul><NavLink activeStyle={activeStyle} className='Link' to="/profiles/heyhey">현홍</NavLink></ul>
      <ul><NavLink activeStyle={activeStyle} className='Link' to="/profiles/gildong">길동</NavLink></ul>
    
      <Route path="/profiles" exact
      render={()=><div>사용자를 선택해 주세요</div>}/>
      <Route path="/profiles/:username" component={Profile}/>
    </div>

  )
}
export default Profiles