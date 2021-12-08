const TableHeader = ({ headerNames }) => {
  return (
    <thead className="table-dark">
      <tr>
        {headerNames.map((elem, index) => (
          <th key={index} scope="col">
            {elem}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
