import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavbarComponent from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
