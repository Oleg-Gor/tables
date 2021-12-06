const TableFooter = ({ amountOfUnits, footerNames }) => {
    return (
        <tfoot>
            <tr>
                {footerNames.map((elem, index) => <th key={index}>{elem}</th>
                )}
            </tr>
        </tfoot>
    )

}
//colSpan="3"
export default TableFooter