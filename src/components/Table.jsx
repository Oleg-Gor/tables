import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

const Table = ({ data, headerNames, portionSize }) => {
  const [dataPerPage, setDataPerPage] = useState([...data]);
  const [currentPage, setCurrentPage] = useState(1);  
  const [amountOfUnitsPerPage, setAmountOfUnitsPerPage] = useState(10);
  const [maxUnitsPerPage, setMaxUnitsPerPage] = useState(null);
  const [amountOfPages, setAmountOfPages] = useState(null);
  const [portionCount, setPortionCount] = useState(null);
  const [portionNumber, setPortionNumber] = useState(null);

  const location = useLocation();

  const filterData = useCallback(() => {
    const amountOfUnits = data.length;
    setMaxUnitsPerPage(amountOfUnits);
    setAmountOfPages(Math.ceil(amountOfUnits / amountOfUnitsPerPage));

    const amountOfPortions = Math.ceil(amountOfPages / portionSize);
    setPortionCount(amountOfPortions);
    amountOfPortions > 1 && setPortionNumber(1);

    const begin =
      currentPage === 1 ? 0 : (currentPage - 1) * amountOfUnitsPerPage;
    const end =
      Number(begin + amountOfUnitsPerPage) > amountOfUnits - 1
        ? amountOfUnits - 1
        : Number(begin + amountOfUnitsPerPage);

    let newData = data.slice(begin, end);
    setDataPerPage(newData);
  }, [amountOfUnitsPerPage, currentPage, data]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  useEffect(() => {
    setCurrentPage(1);
  }, [amountOfUnitsPerPage]);



  return !!dataPerPage.length ? (
    <table className="table">
      <TableHeader headerNames={headerNames} />
      <TableBody newData={dataPerPage} location={location.pathname} />
      <TableFooter
        maxUnitsPerPage={maxUnitsPerPage}
        amountOfPages={amountOfPages}
        currentPage={currentPage}
        amountOfCows={headerNames.length}
        setAmountOfUnitsPerPage={setAmountOfUnitsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </table>
  ) : (
    <div></div>
  );
};

export default Table;
