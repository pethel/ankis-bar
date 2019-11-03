import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import isThisWeek from 'date-fns/isThisWeek';

import WeeklyMenuContext from './WeeklyMenuContext';
import {Hx} from '../hx';
import {BackButton} from '../backbutton';
import './WeeklyMenuTable.css'

/*
<WeeklyMenuContext.Consumer>
{({isLoading, week, weeklyMenu}) => !isLoading && isThisWeek(new Date(week)) && (
  <div className="WeeklyMenuTable">

  </div>
)}
</WeeklyMenuContext.Consumer>
*/

const WeeklyMenuTable = () => {
  return (
    <section>
      <Grid>
        <Row>
          <Col xs={8} xsOffset={2}>
            <BackButton to="/">Tilbaka til huvudsidan</BackButton>
            <div className="WeeklyMenuTable">
              <WeeklyMenuContext.Consumer>
                {({isLoading, week, weeklyMenu}) => {
                  if (!isLoading) {
                    return weeklyMenu && isThisWeek(new Date(week))
                      ? weeklyMenu.map((day, i) => (
                        <div className="WeeklyMenuTable__day" key={i}>
                          <Hx level={1} lookLike={1}>{day.title[0].text}</Hx>
                          <p>{day.text[0].text}</p>
                        </div>
                      ))
                      : 'Veckans meny är inte uppdaterad. Vänligen ring oss på 0942 10068 för information'
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
