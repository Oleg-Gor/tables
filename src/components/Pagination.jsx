const Pagination = ({
    amountOfPages,
    currentPage,
    setCurrentPage,
    arrOfPortion
}) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">

                <li className="page-item"  >
                    <button className={currentPage === 1 ? "page-link disabled " : "page-link"} aria-label="Previous" onClick={() => setCurrentPage(1)}>
                        <span aria-hidden="true">&lArr;</span>
                    </button>
                </li>

                <li className="page-item"  >
                    <button className={currentPage === 1 ? "page-link disabled " : "page-link"} aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)}>
                        <span aria-hidden="true"> &larr; </span>
                    </button>
                </li>

                {arrOfPortion.map(elem => <li className={currentPage === elem ? "page-item active" : "page-item"} key={elem}><button className="page-link" onClick={() => setCurrentPage(elem)}>{elem}</button></li>)}

                <li className="page-item" >
                    <button className={currentPage === amountOfPages ? "page-link disabled " : "page-link"} aria-label="Next" onClick={() => setCurrentPage(currentPage + 1)} >
                        <span aria-hidden="true">&rarr;</span>
                    </button>
                </li>

                <li className="page-item" >
                    <button className={currentPage === amountOfPages ? "page-link disabled" : "page-link"} aria-label="Next" onClick={() => setCurrentPage(amountOfPages)} >
                        <span aria-hidden="true">&rArr;</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination

//active