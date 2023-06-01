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
      <button onClick={() => onBackPage(currentPage - 1)}>BACK</button>
      {pagesArray.map((pageFromArray) => (
        <button key={pageFromArray} onClick={() => onChangePage(pageFromArray)}>
          {pageFromArray}
        </button>
      ))}
      <button onClick={() => onNextPage(currentPage + 1)}>BACK</button>
    </div>
  );
};

export default PagesComponent;
