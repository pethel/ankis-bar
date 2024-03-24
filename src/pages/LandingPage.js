import React from "react";
import { string } from "prop-types";
import Intro from "../components/intro";
import Menu from "../components/menu";

const LandingPage = ({ mainId }) => (
  <>
    <Intro mainId={mainId} />
    <Menu />
  </>
);

LandingPage.propTypes = {
  mainId: string.isRequired,
};

export default LandingPage;
