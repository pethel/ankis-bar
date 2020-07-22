import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

import {Hx} from '../hx';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <Grid>
        <Row>
          <Col xs={12}>
            <Hx level={1}>Ankis Bar</Hx>
          </Col>
        </Row>
      </Grid>
    </header>
  )
};

export default Header;
