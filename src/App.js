import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import SearchResults from "./SearchResults";

function App() {
  const [query, setQuery] = useState("sally");

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/search?query=${query}`}>Search</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/search">
            <SearchResults />
          </Route>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
