import Pagination from "./Pagination"

const TableFooter = ({
  maxUnitsPerPage,
  setAmountOfUnitsPerPage,
  amountOfPages,
  currentPage,
  setCurrentPage,
  amountOfCows,
  arrOfPortion,
}) => {

  return (
    <tfoot>
      <tr>
        <td colSpan={amountOfCows}>
          <div className="footer">
            <div className="footer">
              {maxUnitsPerPage >= 20 && <select className="form-select totalSelect" onChange={(e) => setAmountOfUnitsPerPage(Number(e.target.value))}>
                <option defaultValue="10" >10</option>
                {maxUnitsPerPage >= 20 && <option value="20">20</option>}
                {maxUnitsPerPage >= 30 && <option value="30">30</option>}
                {maxUnitsPerPage >= 50 && <option value="50">50</option>}
              </select>
              }
              <div className="info totalUnits" > {`total units ${maxUnitsPerPage}`}</div>
            </div>
            <div className="footer">
              <div className="info">{currentPage} page from {amountOfPages} pages</div>
              {amountOfPages > 1 && <Pagination currentPage={currentPage}
                amountOfPages={amountOfPages}
                setCurrentPage={setCurrentPage}
                arrOfPortion={arrOfPortion} />}

            </div>
          </div>

        </td>
      </tr>
    </tfoot>
  )
}
export default TableFooter

