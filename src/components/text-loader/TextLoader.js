import {useEffect, useState} from 'react';
import i18next from 'i18next';

import {SE} from './languages';
import defaultNS from './defaultNS';

const TextLoader = ({children, lng}) => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!i18next.hasResourceBundle(lng, defaultNS)) {
      setIsLoaded(false);
      import(`./i18n/${lng}.json`).then(({default: texts}) => {
        i18next.addResourceBundle(lng, defaultNS, texts, true, true);
        i18next
          .changeLanguage(lng).then(setIsLoaded(true));
      });
    }
  }, [lng]);

  return isLoaded && i18next.hasResourceBundle(lng, defaultNS) && children;
};

TextLoader.defaultProps = {
  lng: SE,
};


export default TextLoader;
