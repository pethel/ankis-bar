import i18next from 'i18next';
import {initReactI18next} from "react-i18next";

import defaultNS from './defaultNS';

export default () => i18next
  .use(initReactI18next)
  .init({
    defaultNS,
    debug: process.env.NODE_ENV === 'development',
  });
