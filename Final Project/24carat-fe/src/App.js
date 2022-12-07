import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-utilities.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import {Home,Login} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/customStyles.css";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="bg">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
