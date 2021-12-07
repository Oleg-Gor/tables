const TableFooter = ({ maxUnitsPerPage, setAmountOfUnitsPerPage, amountOfPages, currentPage, setCurrentPage, amountOfCows }) => {    
    return (
        <tfoot>
            <tr>
                <td colSpan={amountOfCows}>
                    <div className="footer">
                        <div className="footer">
                            <select className="form-select" onChange={(e)=>setAmountOfUnitsPerPage(Number(e.target.value)) }>
                                <option defaultValue="10" >10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                            <div className ="info"> {`total units ${maxUnitsPerPage}`}</div>
                        </div>
                        <div className="footer">
                            <div className ="info">{currentPage} page from {amountOfPages} pages</div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item" onClick={() => setCurrentPage(currentPage-1)} >
                                        <a className={currentPage === 1? "page-link disabled ":"page-link"}  href="#" aria-label="Previous" >
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li className="page-item" onClick={() => setCurrentPage(currentPage+1)}>
                                        <a className= {currentPage === amountOfPages? "page-link disabled ":"page-link"}  href="#" aria-label="Next" >
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
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

