import Counter from "./features/counter/Counter";
import Todo from './features/todo/Todo'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Route path="/" component={Counter} exact={true}/>
      <Route path="/Todo" component={Todo} exact={true}/>
    </div>
  );
}

export default App;
