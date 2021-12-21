import './App.css';
import { Switch } from 'react-router';
import Public from "./routes/public";
import Private from "./routes/private";
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Transfer from './pages/Transfer/transfer';
import Error from './pages/Error/error';
import Yoriqnoma from './pages/Yoriqnoma/yoriqnoma';

function App() {
  return (
    <div className="App">
    <Switch>
      <Public path='/' component={Home} exact/>
      <Private path='/transfer' >
        <Transfer/>
      </Private>
      <Public path='/login'>
        <Login/>
      </Public>
      <Public path='/register'>
        <Register/>
      </Public>
      <Public>
        <Yoriqnoma path='/yoriqnoma' />
      </Public>
      <Public>
        <Error path="*"/>
      </Public>
      
     
    </Switch>
  </div>
  );
}

export default App;
