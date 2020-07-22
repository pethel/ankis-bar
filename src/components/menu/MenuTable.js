import React, {Fragment} from 'react';
import {t} from 'i18next';

import MenuItem from './MenuItem';
import {Hx} from '../hx';
import menuCategories from '../menu-categories';

const MenuTable = () => {
  return (
    <section className="MenuTable">
      {menuCategories.map(category => (
        <Fragment key={category.name}>
          <Hx id={category.name} level={1} lookLike={2}>{t(category.name)}</Hx>
          <ul className="MenuTable__list">
            {category.dishes.map(dish => (
              <MenuItem
                key={dish.name}
                heading={t(dish.name)}
                price={dish.price}
                ingredients={dish.ingredients}
              />
            ))}
          </ul>
        </Fragment>
      ))}
    </section>
  );
};

export default MenuTable;
