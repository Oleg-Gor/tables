import { TableRowLandpads, TableRowPastLaunches } from "./TableRows";

const TableBody = ({ newData, location }) => {
  return (
    <tbody>
      {location === "/pastlaunches" &&
        newData.map((elem) => (
          <TableRowPastLaunches
            location={location}
            key={elem.id}
            data={{
              name: elem.name,
              img_link: elem.links?.patch?.small,
              date_local: elem.date_local,
              details: elem.details,
            }}
          />
        ))}
      {location === "/landpads" &&
        newData.map((elem) => (
          <TableRowLandpads
            location={location}
            key={elem.id}
            data={{
              name: elem.full_name,
              img_link: elem.images.large,
              region: elem.region,
              details: elem.details,
            }}
          />
        ))}
    </tbody>
  );
};

export default TableBody;
