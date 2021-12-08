const TableFooter = ({ maxUnitsPerPage, setAmountOfUnitsPerPage, amountOfPages, currentPage, setCurrentPage, amountOfCows }) => {   
    return (
        <tfoot>
            <tr>
                <td colSpan={amountOfCows}>
                    <div className="footer">
                        <div className="footer">
                            <select className="form-select totalSelect" onChange={(e)=>setAmountOfUnitsPerPage(Number(e.target.value)) }>
                                <option defaultValue="10" >10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                            <div className ="info totalUnits" > {`total units ${maxUnitsPerPage}`}</div>
                        </div>
                        <div className="footer">
                            <div className ="info">{currentPage} page from {amountOfPages} pages</div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"  >
                                        <button className={currentPage === 1? "page-link disabled ":"page-link"}  aria-label="Previous" onClick={() => setCurrentPage(currentPage-1)}>
                                            <span aria-hidden="true">&laquo;</span>
                                        </button>
                                    </li>
                                    <li className="page-item" >
                                        <button className= {currentPage === amountOfPages? "page-link disabled ":"page-link"}  aria-label="Next" onClick={() => setCurrentPage(currentPage+1)} >
                                            <span aria-hidden="true">&raquo;</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </td>
            </tr>
        </tfoot>
    )
}
export default TableFooter

