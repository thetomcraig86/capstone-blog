import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const currentUser = true;
  return (
    <Router>
      <NavBar/>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/post/:postId">
        <Single/>
      </Route>
      <Route path="/write">
          {currentUser ? <Write /> : <Login />}
        <Write/>
      </Route>
      <Route path="/login">
        {currentUser ? <Home /> : <Login />}
        <Login/>
      </Route>
      <Route path="/register">
        {currentUser ? <Home /> : <Register />}
        <Register/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
