import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import Info from './Components/Info';
import Average from './Components/Average';
import SassComponent from './Components/SassComponent';
const App = () =>{
  const [visible,setVisible] = useState(false)
  return (
    <div className="App">
      <Counter/>
      <button 
        onClick={()=>{setVisible(!visible)}}
      >{visible ? '숨기기':'보이기'}</button>
      {visible &&  <Info/>}
      <Average/>
      <SassComponent/>
    </div>
  )
}

export default App;