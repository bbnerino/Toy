import './App.css'
import Gugudan from './Gugudan';
import WordGame from './WordGame'
import {Link, Route,Routes} from 'react-router-dom'
import Baseball from './Baseball';
import UserStore from './store/users'
import UserCheck from './UserCheck'

function App() {
  return (
    <UserStore>
      <div className='App'>
        <div className='navbar'>
          <span><Link to="/">구구단 | </Link></span>  
          <span><Link to="/wordgame"> 쿵쿵따 | </Link></span>
          <span><Link to="/baseball">야구게임 |</Link></span>
          <span><Link to="/users">내 정보</Link></span>
        </div>
        <hr></hr>
        <Routes>
          <Route path="/" element={<Gugudan/>}/>
          <Route path="/wordgame" element={<WordGame/>}/>
          <Route path="/baseball" element={<Baseball/>}/>
          <Route path="/users" element={<UserCheck/>}/>
        </Routes>
      </div>
    </UserStore>
  );
}

export default App;
