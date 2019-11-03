import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import isThisWeek from 'date-fns/isThisWeek';

import WeeklyMenuContext from './WeeklyMenuContext';
import {Hx} from '../hx';
import {BackButton} from '../backbutton';
import './WeeklyMenuTable.css'

const days = new Map();
days.set(0, 'Måndag');
days.set(1, 'Tisdag');
days.set(2, 'Onsdag');
days.set(3, 'Torsdag');
days.set(4, 'Fredag');

const WeeklyMenuTable = () => {
  return (
    <section>
      <Grid>
        <Row>
          <Col xs={8} xsOffset={2}>
            <BackButton to="/">Tilbaka till huvudsidan</BackButton>
            <div className="WeeklyMenuTable">
              <WeeklyMenuContext.Consumer>
                {({isLoading, week, weeklyMenu}) => {
                  if (!isLoading) {
                    return weeklyMenu && isThisWeek(new Date(week))
                      ? weeklyMenu.map((day, i) => (
                        <div className="WeeklyMenuTable__day" key={i}>
                          <Hx level={1} lookLike={1}>{days.get(i)}</Hx>
                          <p>{day.text[0].text}</p>
                        </div>
                      ))
                      : (
                        <p>Veckans meny är inte uppdaterad. <br/>
                        Vänligen ring oss på 0942 10068 för information</p>
                      )
                  }
                }}
              </WeeklyMenuContext.Consumer>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};

export default WeeklyMenuTable;
