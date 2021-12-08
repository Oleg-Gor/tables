import { useEffect, useState, useCallback } from "react";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

const Table = ({ data, headerNames }) => {


  const [newData, setNewData] = useState([...data]);
  const [currentPage, setCurrentPage] = useState(1);
  const [amountOfUnitsPerPage, setAmountOfUnitsPerPage] = useState(10);
  const [maxUnitsPerPage, setMaxUnitsPerPage] = useState(null);
  const [amountOfPages, setAmountOfPages] = useState(null);

  const filterData = useCallback(() => {
    const amountOfUnits = data.length;
    setMaxUnitsPerPage(amountOfUnits);
    setAmountOfPages(Math.ceil(amountOfUnits / amountOfUnitsPerPage));
    const begin =
      currentPage === 1 ? 0 : (currentPage - 1) * amountOfUnitsPerPage;
    const end =
      Number(begin + amountOfUnitsPerPage) > amountOfUnits - 1
        ? amountOfUnits - 1
        : Number(begin + amountOfUnitsPerPage);

    let newData = data.slice(begin, end);
    setNewData(newData);
  }, [amountOfUnitsPerPage, currentPage, data]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  useEffect(() => {
    setCurrentPage(1);
  }, [amountOfUnitsPerPage]);

  return !!newData.length ? (
    <table className="table">
      <TableHeader headerNames={headerNames} />
      <TableBody newData={newData} />
      <TableFooter
        maxUnitsPerPage={maxUnitsPerPage}
        setAmountOfUnitsPerPage={setAmountOfUnitsPerPage}
        amountOfPages={amountOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        amountOfCows={headerNames.length}
      />
    </table>
  ) : (
    <div></div>
  );
};

export default Table;
