import React, { Component } from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './home/Home';
import NewTransaction from './transaction/NewTransaction';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar color="inverse" light expand="md">
            <NavbarBrand href="/">CashFlower</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/transaction/new">Add Transaction</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <div className="container">
            <Route exact path="/" component={Home} /> 
            <Route path="/transaction/new" component={NewTransaction} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
