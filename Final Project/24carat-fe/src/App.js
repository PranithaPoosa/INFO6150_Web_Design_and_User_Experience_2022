import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-utilities.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import {Home} from "./components";
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
