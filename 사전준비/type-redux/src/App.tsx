import React from 'react';
import {Provider} from 'react-redux'
import Change from './Change';
import Samsung from './Samsung';
import { store } from './store/store';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<h1>헤ㅇ이ㅣ잉</h1>}/>
            <Route path='/samsung' element={<><Samsung/><Change/></>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
