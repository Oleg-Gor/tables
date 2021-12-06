const TableBody = ({ newData }) => {

    return (
        <tbody>
            {newData.map((elem, index) => {
                return (
                    <tr key={elem.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{elem.name}</td>
                        <td>{new Date(elem.date_local).toDateString()}</td>
                        <td>{elem.details}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableBody