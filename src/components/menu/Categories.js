import React, {useState} from 'react';
import {t} from 'i18next';
import classNames from 'classnames';
import {Link} from 'react-scroll';

import menuButtonOpen from './menu-button-open.svg';
import menuButtonClose from './menu-button-close.svg';
import {UnstyledButton} from '../buttons';
import menuCategories from '../menu-categories';
import isMobile from '../../isMobile';

const Categories = () => {

  const [active, setActive] = useState(`#${menuCategories[0].name}`);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleOnClick = (e) => {
    setActive(e.target.getAttribute('href'));
    if (isMobile()) {
      setIsExpanded(false);
    }
  };

  const getOffSet = () => {
    if (isMobile()) {
      return isExpanded ? -250 : -100;
    }
    return -20;
  };

  return (
    <nav className="Categories">
      <UnstyledButton
        type="button"
        aria-controls="categories-list"
        className="Categories_expand-button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? t('Categories.open') : t('Categories.close')}
      >
        <img
          aria-hidden={true}
          src={isExpanded ? menuButtonClose : menuButtonOpen}
          alt=""
          height="30px"
        />
      </UnstyledButton>
      <ul
        id="categories-list"
        className={classNames('Categories__list', {'Categories__list--expanded': isExpanded})}
      >
        {menuCategories.map(category => (
          <li key={category.name}>
            <Link
              className={classNames(
                'Categories__link',
                {'Categories__link--active': active === `#${category.name}`}
              )}
              onClick={handleOnClick}
              to={category.name}
              smooth={true}
              duration={500}
              href={`#${category.name}`}
              offset={getOffSet()}
            >
              {t(category.name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
