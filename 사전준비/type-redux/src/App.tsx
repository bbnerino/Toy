import React from 'react';
import {Provider} from 'react-redux'
import Change from './Change';
import Samsung from './Samsung';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>예시코드입니다.</h1>
        <Samsung/>
        <Change/>
      </Provider>
    </div>
  );
}

export default App;
