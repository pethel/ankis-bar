import React, { useRef } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Categories from "./Categories";
import MenuTable from "./MenuTable";
import "./Menu.css";

const Menu = () => {
  const menuTableRef = useRef();

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <div className="Menu">
            <Categories
              categoryNameElement={(categoryName) =>
                menuTableRef.current.getMenuRef(categoryName).current
              }
            />
            <MenuTable ref={menuTableRef} />
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Menu;
