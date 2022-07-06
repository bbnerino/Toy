import './App.css';
import {Switch,Redirect,Route} from 'react-router'
import Header from './components/Header'
import Home from './components/Home'
import Mypage from './components/Mypage'
import NotFound from './components/NotFound'
import Login  from './components/Login';
import Signup from './components/Signup';
function App() {
  const isLogin = false;
  return (
    <div>
      <Header />
      {isLogin ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      )}
    </div>
  );
}

export default App;
