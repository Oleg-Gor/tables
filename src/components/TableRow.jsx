import fbImage from '../img/petus.png'

const TableRow = ({ data }) => {



    return (
        <tr>
            {data.name && <th>{data.name}</th>}
            {data.img_link && <td>
                <img
                    className="img"
                    src={data.img_link}
                    alt={data.name}
                /></td>}
            {!data.img_link && <td>
                <img
                    className="img"
                    src={fbImage}
                /></td>}
            {data.date_local &&
                <td>{new Date(data.date_local).toDateString()}
                </td>}
            {data.details && <td>{data.details}</td>}

        </tr>
    )
};

export default TableRow;
