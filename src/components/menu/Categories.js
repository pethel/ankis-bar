import React, { useState, useRef } from "react";
import { t } from "i18next";
import classNames from "classnames";
import menuButtonOpen from "./menu-button-open.svg";
import menuButtonClose from "./menu-button-close.svg";
import { UnstyledButton } from "../buttons";
import menuCategories from "../menu-categories";
import isMobile from "../../isMobile";

const Categories = ({ categoryNameElement }) => {
  const [active, setActive] = useState();
  const [isExpanded, setIsExpanded] = useState(!isMobile());
  const ulRef = useRef();

  const handleOnClick = (categoryName) => {
    if (isMobile()) {
      setIsExpanded(false);
    }
    setActive(categoryName);
    const { top: topCategory, height: heightCategory } =
      categoryNameElement(categoryName).getBoundingClientRect();
    const { height: heightUl } = isMobile()
      ? ulRef.current.getBoundingClientRect()
      : { height: 0 };

    const OFFSET = 10;

    window.scrollTo({
      top: topCategory + window.scrollY - heightUl - heightCategory - OFFSET,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="Categories">
      <ul
        id="categories-list"
        className={classNames("Categories__list", {
          "Categories__list--expanded": isExpanded,
        })}
        ref={ulRef}
      >
        {menuCategories.map((category) => (
          <li
            key={category.name}
            className={classNames("Categories__link", {
              "Categories__link--active": active === category.name,
            })}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                handleOnClick(category.name);
              }}
              href={`#${category.name}`}
            >
              {t(category.name)}
            </a>
          </li>
        ))}
      </ul>
      <UnstyledButton
        type="button"
        aria-controls="categories-list"
        className="Categories_expand-button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? t("Categories.open") : t("Categories.close")}
      >
        <img
          aria-hidden={true}
          src={isExpanded ? menuButtonClose : menuButtonOpen}
          alt=""
          height="30px"
        />
      </UnstyledButton>
    </nav>
  );
};

export default Categories;
