import "./PagesComponent.css";

import React from "react";

const PagesComponent = ({
  totalPages,
  onChangePage,
  onNextPage,
  onBackPage,
}) => {
  const pagesArray = new Array(totalPages).fill().map((_, i) => i++);
  return (
    <div>
      <button onClick={() => onBackPage()}>BACK</button>
      {pagesArray.map((pageFromArray) => (
        <button key={pageFromArray} onClick={() => onChangePage(pageFromArray)}>
          {pageFromArray}
        </button>
      ))}
      <button onClick={() => onNextPage()}>NEXT</button>
    </div>
  );
};

export default PagesComponent;
