import React, {Fragment, useImperativeHandle} from 'react';
import {t} from 'i18next';
import MenuItem from './MenuItem';
import {Hx} from '../hx';
import menuCategories from '../menu-categories';

const MenuTable = React.forwardRef((_, ref) => {

  const [menuItemRefs] = React.useState(
    menuCategories.map(() => React.createRef())
  );

  useImperativeHandle(ref, () => {
    return {
      getMenuRef: (name) =>
        menuItemRefs.find(it => it.current.getAttribute('data-name') === name)
    };
  }, []);

  return (
    <section className="MenuTable">
      {menuCategories.map((category, i) => {
        return (
          <Fragment key={category.name}>
            <Hx id={category.name} level={1} lookLike={2} tabIndex="-1" data-name={category.name}
                ref={menuItemRefs[i]}>{t(category.name)}</Hx>
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
        )
      })}
    </section>
  )
});

export default MenuTable;
