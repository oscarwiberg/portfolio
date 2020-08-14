import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavbarComponent from './components/Navbar/Navbar';
import About from './components/pages/About';
import Projects from './components/pages/Projects';

import Jumbo from './components/pages/Jumbo';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Route path="/" exact component={Jumbo} />
        <Container>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
