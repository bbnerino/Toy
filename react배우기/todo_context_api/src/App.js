import './App.css';
import {Route} from 'react-router'
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import Check from './components/Check';

function App() {
  return (
        <div>        
        <Navbar/>
          <Route path="/" exact component={<TodoList></TodoList>}/>          
          <Route path="/check" component={<Check></Check>}/>
        </div>
  );
}

export default App;
