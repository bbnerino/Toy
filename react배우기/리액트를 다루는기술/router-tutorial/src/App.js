import './App.css';
import Home from './components/Home'
import About from './components/About'
import Profiles from './components/Profiles'
import HistorySample from './components/HistorySample';
import { Route,Link,Switch} from 'react-router-dom';
const App=()=> {
  return (
    <div className='App'>
      <ul>
        <li className='li'><Link className='Link' to="/">홈</Link></li>
        <li className='li'><Link className='Link' to="/about">소개</Link></li>
        <li className='li'><Link className='Link' to="/history">히스토리</Link></li>
        <li><Link className='Link' to='/profiles'>프로필</Link></li>
      </ul>
      <hr></hr>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/about" component={About}/>
        <Route path="/profiles" component={Profiles}/>
        <Route path="/history" component={HistorySample}/>
        <Route render={({location})=>(
          <div>
            <h2>이 페이지는 존재 안합니다.</h2>
            <p>{location.pathname}</p>
          </div>
        )} />
      </Switch>
    </div>
  );
}

export default App;
