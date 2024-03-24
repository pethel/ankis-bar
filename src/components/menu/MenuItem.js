import React from "react";
import { number, string, arrayOf, elementType } from "prop-types";
import { Hx } from "../hx";

const MenuItem = ({ heading, price, ingredients }) => {
  return (
    <li className="MenuItem">
      <dl>
        <Hx level={3} element="dt" className="MenuItem__name">
          {heading}
        </Hx>
        <Hx level={3} element="dd" className="MenuItem__price">
          {price}:-
        </Hx>
        <dd className="MenuItem__ingredients">
          <ul>
            {ingredients.map((Ingredient, index) => (
              <li key={index} className="MenuItem__ingredient">
                <Ingredient />
              </li>
            ))}
          </ul>
        </dd>
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
