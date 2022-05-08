import React from "react";
import Cards from "./components/Cards";
import pro from "./components/onePapka/Products2";

const product = pro;
function pdf_dok(props) {
  return (
    <>
      <Cards name={product} />
    </>
  );
}

export default pdf_dok;
