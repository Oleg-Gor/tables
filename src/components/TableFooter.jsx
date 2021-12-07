const TableFooter = ({ amountOfUnits, footerNames, amountHeaderNames }) => {
    return (
        <tfoot>
            <tr>
                {footerNames.map((elem, index) => {


                    if (index === 0) {
                        return <th key={index} colSpan={amountHeaderNames}>{elem}</th>
                    } else if (index === footerNames.length - 1) {

                        return <th key={index}>{amountOfUnits} units</th>

                    }
                }



                )}
            </tr>
        </tfoot>
    )

}
//colSpan="3"
export default TableFooter