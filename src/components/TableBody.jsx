const TableBody = ({newData}) => {
    return (
        <>
            <th scope="row">{newData.index + 1}</th>
            <td>{newData.name}</td>
            <td>{new Date(newData.date_local).toDateString()}</td>
            <td>{newData.details}</td>
        </>
    )
}

export default TableBody