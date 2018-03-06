import React, { Component } from 'react';

import { Jumbotron } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome to Cashflower!</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;