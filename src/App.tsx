<<<<<<< HEAD
// import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Upload from "./pages/Upload";

function App() {
  return (
    <Router>
=======
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import UploadVideo from "./pages/UploadVideo";
// import { Switch } from "formik-mui";

function App() {
  return (
    <BrowserRouter>
>>>>>>> test
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
<<<<<<< HEAD
        <Route exact path='/upload'>
          <Upload />
        </Route>
      </Switch>
    </Router>
=======
        <Route path='/upload'>
          <UploadVideo />
        </Route>
      </Switch>
    </BrowserRouter>
>>>>>>> test
  );
}

export default App;
