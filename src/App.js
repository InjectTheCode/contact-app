import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AllContact from "./pages/AllContact";
import InputPage from "./pages/InputPage";

import MainPage from "./pages/MainPage";
import NavBarPage from "./pages/NavBarPage";

function App() {
  return (
    <Router>
      <NavBarPage />

      <Route path="/" exact>
        <Redirect to="/main" />
      </Route>

      <Route path="/main">
        <MainPage />
      </Route>

      <Route path="/add-new">
        <InputPage />
      </Route>

      <Route path="/contacts">
        <AllContact />
      </Route>
    </Router>
  );
}

export default App;
