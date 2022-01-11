import './App.css'
import {Link, Route,Routes} from 'react-router-dom'
import UserStore from './store/users'
import routes from './routes'
function App() {
  return (
    <UserStore>
      <div className='App'>
        <div className='navbar'>
          {routes.map(route=>{return(
            <span key={route.path}>
              <Link to={route.path}>
                {route.name}&nbsp;&nbsp; 
              </Link>
            </span>  
          )})}
        </div>
        <hr/>
        <Routes>
          {routes.map(route=>{
          return (
          <Route
            key={route.path}
            path={route.path}
            element= {<route.component/>}
          />
          )
          })}
        </Routes>
      </div>
    </UserStore>
  );
}

export default App;
