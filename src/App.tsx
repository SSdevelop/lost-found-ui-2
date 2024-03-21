import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import UploadVideo from "./pages/UploadVideo";
// import { Switch } from "formik-mui";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/upload'>
          <UploadVideo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
