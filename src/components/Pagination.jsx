const Pagination = ({
  amountOfPages,
  currentPage,
  setCurrentPage,
  amountOfCows,
}) => {    
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className={currentPage === 1 ? "page-link disabled " : "page-link"}
            aria-label="Previous"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        <li className="page-item">
          <button className="page-link">
            1
          </button>
        </li>
        <li className="page-item">
          <button className="page-link">
            2
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" >
            3
          </button>
        </li>

        <li className="page-item">
          <button
            className={
              currentPage === amountOfPages
                ? "page-link disabled "
                : "page-link"
            }
            aria-label="Next"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
