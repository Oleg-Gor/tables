import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

const Table = ({ data, headerNames, portionSize }) => {

  const [newData, setNewData] = useState([...data]);
  const [currentPage, setCurrentPage] = useState(1);
  const [amountOfUnitsPerPage, setAmountOfUnitsPerPage] = useState(10);
  const [maxUnitsPerPage, setMaxUnitsPerPage] = useState(null);
  const [amountOfPages, setAmountOfPages] = useState(null);
  const [arrOfPortion, setArrOfPortion] = useState([])

  const location = useLocation()

  const getNewDataToShow = useCallback((amountOfUnitsPerPage, amountOfUnits) => {
    const begin =
      currentPage === 1 ? 0 : (currentPage - 1) * amountOfUnitsPerPage;

    const end =
      Number(begin + amountOfUnitsPerPage) > amountOfUnits - 1
        ? amountOfUnits - 1
        : Number(begin + amountOfUnitsPerPage);
    return data.slice(begin, end);
  }, [currentPage, data])

  const filterData = useCallback(() => {
    const amountOfUnits = data.length;
    setMaxUnitsPerPage(amountOfUnits);
    const amountOfPagesForCount = Math.ceil(amountOfUnits / amountOfUnitsPerPage)
    setAmountOfPages(amountOfPagesForCount);

    let newData = getNewDataToShow(amountOfUnitsPerPage, amountOfUnits);

    setNewData(newData);
  }, [amountOfUnitsPerPage, data, getNewDataToShow]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  useEffect(() => {
    setCurrentPage(1);
  }, [amountOfUnitsPerPage]);

  useEffect(() => {
    let begin = null;
    let end = null
    const arr = [];
    if (currentPage <= 1) {
      begin = 1;
      if (amountOfPages >= portionSize) {
        end = portionSize
      } else {
        end = amountOfPages
      }
    } else if (currentPage !== amountOfPages) {
      begin = currentPage - 1;
      end = currentPage + 1
    } else {
      begin = currentPage - 2;
      end = amountOfPages
    }
    for (let i = begin; i <= end; i++) {
      arr.push(i)
    }
    setArrOfPortion(arr)
  }, [currentPage, amountOfPages, portionSize])

  return !!newData.length ? (
    <table className="table align-middle">
      <TableHeader headerNames={headerNames} />
      <TableBody newData={newData} location={location.pathname} />
      <TableFooter
        maxUnitsPerPage={maxUnitsPerPage}
        setAmountOfUnitsPerPage={setAmountOfUnitsPerPage}
        amountOfPages={amountOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        amountOfCows={headerNames.length}
        arrOfPortion={arrOfPortion}
      />
    </table>
  ) : (
    <div></div>
  );
};

export default Table;
