import React, {useState, useMemo} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";
import { UserContext } from "./userContext";

function App2() {

    // const [value, setValue] = useState("hello from context");
    const [user, setUser] = useState(null);

    const value = useMemo(() => ({user, setUser}), [user, setUser])

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
            <Route path="/" exact component={Index} />
            <Route path="/about/" exact component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App2;
