import React, { Component } from 'react';
import './App.css';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
/**navbar needs to be imported from the bootstrap webpage for it to be used in the website and app. */
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Create } from './components/create';
import { Read } from './components/read';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              {/*href tag is used to add a title to each url. */}
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <switch>
            {/* Routes are used to decide what information is displayed on each page. */}
            <Route path='/home' component={Content} exact />
            <Route path='/read' component={Read} exact />
            <Route path='/create' component={Create} exact />
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;
