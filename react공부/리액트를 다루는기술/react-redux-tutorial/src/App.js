import './App.css';
import Counter from './Counter';
import Todos from './Todos';

function App() {
  return (
    <div className="App">
      <Counter number={0}/>
      <hr></hr>
      <Todos/>
    </div>
  );
}

export default App;
