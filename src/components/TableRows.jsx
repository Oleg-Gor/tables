import fbImage from "../img/petus.png";

export const TableRowLandpads = ({ data }) => {
  return (
    <tr>
      <th>{data.name}</th>
      {data.img_link ? (
        <td >
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
      <th className="name">{data.name}</th>
      {data.img_link ? (
        <td className="image">
          <img className="img" src={data.img_link} alt={data.name} />
        </td>
      ) : (
        <td className="image">
          <img className="img" src={fbImage} alt={data.name} />
        </td>
      )}
      <td className="date">{new Date(data.date_local).toDateString()}</td>
      <td className="details">{data.details}</td>
    </tr>
  );
};
