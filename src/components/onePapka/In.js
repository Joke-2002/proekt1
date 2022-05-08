import React from "react";
import Cards from "../Cards";
import joomart from "./indexProduct";

const joma = joomart;
function In(props) {
  return (
    <div>
      <Cards name={joma} />
    </div>
  );
}

export default In;
