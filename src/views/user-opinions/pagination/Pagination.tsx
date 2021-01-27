import React from "react";

import { PaginationProps } from "../models";

import ".././OpinionsWrapperStyles.scss";

const Pagination = ({
  opinionsOnPage,
  totalOpinions,
  paginate,
}: PaginationProps) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalOpinions / opinionsOnPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="opinions-list-nav">
      {pageNumbers.map((number: number) => (
        <div className="opinions-page-container">
          <div className="opinions-page">
            <button
              className="opinions-page-buttons"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
