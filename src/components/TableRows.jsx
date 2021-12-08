import fbImage from "../img/petus.png";

export const TableRowLandpads = ({ data }) => {
  return (
    <tr>
      <th>{data.name}</th>
      {data.img_link ? (
        <td>
          <img className="img" src={data.img_link} alt={data.name} />
        </td>
      ) : (
        <td>
          <img className="img" src={fbImage} alt={data.name} />
        </td>
      )}
      <td>{data.region}</td>
      <td>{data.details}</td>
    </tr>
  );
};

export const TableRowPastLaunches = ({ data }) => {
  return (
    <tr>
      <th>{data.name}</th>
      {data.img_link ? (
        <td>
          <img className="img" src={data.img_link} alt={data.name} />
        </td>
      ) : (
        <td>
          <img className="img" src={fbImage} alt={data.name} />
        </td>
      )}
      <td>{new Date(data.date_local).toDateString()}</td>
      <td>{data.details}</td>
    </tr>
  );
};
