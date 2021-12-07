import TableRow from "./TableRow"

const TableBody = ({ newData }) => {
    return (
        <tbody>
            {newData.map(elem => <TableRow key={elem.id} data={{
                name: elem.name,
                img_link: elem.links.patch.small,
                date_local: elem.date_local,
                details: elem.details
            }} />)}
        </tbody>
    )
}

export default TableBody