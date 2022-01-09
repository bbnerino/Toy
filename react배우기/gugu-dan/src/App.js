import './App.css'
import Gugudan from './Gugudan';
import WordGame from './WordGame'
import {Link, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <span><Link to="/">구구단 | </Link></span>  
        <span><Link to="/wordgame">끝말잇기</Link></span>
      </div>
      <Routes>
        <Route path="/" element={<Gugudan/>}/>
        <Route path="/wordgame" element={<WordGame/>}/>
      </Routes>
    </>
  );
}

export default App;
