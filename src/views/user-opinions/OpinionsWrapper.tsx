import React, { useState, useEffect } from "react";

import Opinions from "./opinions/Opinions";
import Pagination from "./pagination/Pagination";

import { getOpinions } from "../../api/services/opinions/opinionsService";
import { OpinionResponse } from "../../api/services/opinions/models";

import "./OpinionsWrapperStyles.scss";

const OpinionsWrapper = () => {
  const [opinions, setOpinions] = useState<OpinionResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [opinionsOnPage] = useState(10);

  useEffect(() => {
    const callApi = async () => {
      try {
        const apiResult = await getOpinions();

        let { success, result } = apiResult.data;
        if (success) {
          setOpinions(result as OpinionResponse[])
        }
      }
      catch (e) {
        console.log(e);
      }
      finally {
        setLoading(false);
      }
    };
    
    callApi();

    document
      .querySelector(".opinions-container")
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);
  
  // obsluzyc to w paginatorze
  const indexOfLastOpinion = currentPage * opinionsOnPage;
  const indexOfFirstOpinion = indexOfLastOpinion - opinionsOnPage;
  const currentOpinions = opinions.slice(
    indexOfFirstOpinion,
    indexOfLastOpinion
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // obsluzyc to w paginatorze
  const showCurrentPage = (currentPage: number) => {
    if (currentPage === 1) {
      return (
        <span className="opinions-current-page">
          You are currently at 1st page
        </span>
      );
    } else if (currentPage === 2) {
      return (
        <span className="opinions-current-page">
          You are currently at 2nd page
        </span>
      );
    } else if (currentPage === 3) {
      return (
        <span className="opinions-current-page">
          You are currently at 3rd page
        </span>
      );
    } else {
      return (
        <span className="opinions-current-page">
          You are currently at {currentPage}th page
        </span>
      );
    }
  };

  return (
    <div className="opinions-container">
      <span className="opinions-maintext">Opinions</span>
      <div className="opinions-list-container">
        <div className="opinions-current-page-container">
          <span className="opinions-current-page">
            {showCurrentPage(currentPage)}
          </span>
        </div>
        <div className="opinions-list-body">
          <Pagination
            opinionsOnPage={opinionsOnPage}
            totalOpinions={opinions.length}
            paginate={paginate}
          />
          <Opinions opinions={currentOpinions} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default OpinionsWrapper;
