import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
require('../scss/style.scss');

const Menu = () => (
  <div>
    <Grid>
      <Row>
        <Col xs={4} md={4} lg={4} className="text-center">
          <Link to="/">Home</Link>
        </Col>
        <Col xs={4} md={4} lg={4} className="text-center">
          <li><Link to="/about">About</Link></li>
        </Col>
        <Col xs={4} md={4} lg={4} className="text-center">
          <li><Link to="/contact">Contact</Link></li>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Menu;
