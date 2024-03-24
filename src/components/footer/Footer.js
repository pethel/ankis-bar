import React from 'react';
import {Trans} from 'react-i18next';
import {t} from 'i18next';

import './Footer.css';
import phoneSrc from './phone.svg'
import mapsSrc from './maps.svg'
import clockSrc from './clock.svg'

const Footer = () => {
  return (
    <footer className="Footer">
      <a className="Footer__icon" href="tel:+4694210068">
        <img src={phoneSrc} alt={t('Footer.phoneAlt')}/>0942 10068
      </a>
      <a
        className="Footer__icon"
        href="https://goo.gl/maps/eCcnyQVjPtAxhits6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mapsSrc} alt={t('Footer.addressAlt')}/>
        <address>
          Storgatan 37<br/>
          Dorotea
        </address>
      </a>
      <div
        className="Footer__icon"
        style={{display: 'flex', alignItems: 'center'}}>
        <img src={clockSrc} alt={t('Footer.openingHoursAlt')}/>
        <span className="Footer__openingHours">
          <Trans i18nKey="Footer.openingHours">
            <span>Man-søn:</span>
            <span>
                 <time>11:00</time>-<time>21:00</time>
            </span>
          </Trans>
        </span>
      </div>
    </footer>
  )
};

export default Footer;
