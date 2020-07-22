import React from 'react';
import {string} from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Trans} from 'react-i18next';

import './Intro.css';

const Intro = ({mainId}) => (
  <Grid className="Intro">
    <Row>
      <Col xs={12}>
        <p id={mainId} tabIndex="-1">
          <Trans i18nKey="Intro.text">
            Vi har ett varierat utbud av mat. Allt från svensk husmanskost till pizza och À la carte.<br/>
            På vardagar mellan kl 10:30 och 14:00 erbjuder vi dagens rätt, eller lunchpizza till förmånliga priser.
          </Trans>
        </p>
      </Col>
    </Row>
  </Grid>
);

Intro.propTypes = {
  mainId: string.isRequired,
}

export default Intro;
