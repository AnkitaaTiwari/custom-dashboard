import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './pages/home';
import Layout from './components/layout';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>            
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
