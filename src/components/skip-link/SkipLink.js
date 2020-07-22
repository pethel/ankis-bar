import React from 'react';
import {string} from 'prop-types';
import {t} from 'i18next';
import './SkipLink.css';

const SkipLink = ({mainId}) => (
  <a className="SkipLink" href={`#${mainId}`}>{t('SkipLink.text')}</a>
);

SkipLink.propTypes = {
  mainId: string.isRequired,
};

export default SkipLink;
