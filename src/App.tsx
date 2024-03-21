// import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Upload from "./pages/Upload";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/upload'>
          <Upload />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
