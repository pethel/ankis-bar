import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Categories from './Categories';
import MenuTable from './MenuTable';
import './Menu.css';

const Menu = () => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <div className="Menu">
            <Categories/>
            <MenuTable/>
          </div>
        </Col>
      </Row>
    </Grid>
  )
};

export default Menu;
