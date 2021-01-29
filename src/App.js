import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { blue } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/home';
import Layout from './components/layout';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#E6F2FF',
      main: '#2F71EB',
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>            
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
