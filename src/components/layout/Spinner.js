import React, { Fragment } from "react";
import spinner from "./spinner.png";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading..'
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
    <h1>image</h1>
  </Fragment>
);

export default Spinner;
