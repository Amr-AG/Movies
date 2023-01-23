import React from "react";
import ReactPaginate from "react-paginate";
import "./Pageintaion.css";
export default function Pageintaion({ page }) {
  const handlePageClick = (data) => {
    page(data.selected + 1);
  };
  return (
    <div>
      <ReactPaginate
        breakLabel=".."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        nextLabel="next "
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        pageCount={500}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-center flex-wrap px-0 py-5 "
        pageClassName={"page-item"}
        pageLinkClassName={"page-link "}
        activeClassName={"page-item"}
        activeLinkClassName={" page-active"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        disabledClassName={"disabled"}
        disabledLinkClassName={"disabled"}
      />
    </div>
  );
}
