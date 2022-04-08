import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";

import {Result} from "antd";
import './App.css';
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import store from "./store/store";
import Home from "./pages/Home"

function App() {
  return (
    <Provider store={store}>
      
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Link to="/login">Back Home</Link>}
            />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
