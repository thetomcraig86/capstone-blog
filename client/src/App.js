import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
