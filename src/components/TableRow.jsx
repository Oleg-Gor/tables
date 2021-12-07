const TableRow = ({ data }) => (<tr>
    <th>{data.name}</th>
    <td><img className='img' src={data.img_link? data.img_link:"../img/petus.png" } alt={data.name} /></td>
    <td>{new Date(data.date_local).toDateString()}</td>
    <td>{data.details}</td>
</tr>)

export default TableRow
