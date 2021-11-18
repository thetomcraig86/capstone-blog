import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Update from './pages/update/Update';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/post/:postId'>
          <Single />
        </Route>
        <Route path='/write'>
          {user ? <Write /> : <Login />}
          
        </Route>
        <Route path='/login'>
          {user ? <Home /> : <Login />}
          
        </Route>
        <Route path='/register'>
          {user ? <Home /> : <Register />}
          
        </Route>
        <Route path='/update/:postId'>
          <Update />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
