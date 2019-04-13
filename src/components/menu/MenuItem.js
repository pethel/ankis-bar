import React from 'react';
import { number, string, arrayOf, elementType } from 'prop-types';
import { Hx } from '../hx';

const MenuItem = ({ heading, price, ingredients }) => {
  return (
    <li className="MenuItem">
      <dl>
        <Hx level={3} element="dt">{heading} {price}:-</Hx>
        {ingredients.map((Ingredient, index) => (
          <dd key={index}>
            <Ingredient />
          </dd>
        ))}
      </dl>
    </li>
  );
};

MenuItem.propTypes = {
  heading: string.isRequired,
  price: number.isRequired,
  ingredients: arrayOf(elementType).isRequired,
};

export default MenuItem;
