import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import InputPage from "./pages/InputPage";

import MainPage from "./pages/MainPage";
import NavBarPage from "./pages/NavBarPage";

function App() {
  return (
    <Router>
      <NavBarPage />

      <Route path="/main">
        <MainPage />
      </Route>

      <Route path="/add-new">
        <InputPage />
      </Route>
    </Router>
  );
}

export default App;
