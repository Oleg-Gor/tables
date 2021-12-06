import { useEffect, useState } from "react"
import { getPastLaunches } from "../api/api"
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

const Table = ({ data }) => {

    const maxUnitsPerPage = 10;

    const headerNames = ['name', 'date_local', 'details']
    const footerNames = ['Summ','units']

    const [newData, setNewData] = useState()
    const [currentPage, setCurrentPage] = useState(1)

    const getData = async () => {
        await getPastLaunches().then(data => {
            setCurrentPage(currentPage + 1)
            if (data.length > currentPage * maxUnitsPerPage) {
                data.length = currentPage * maxUnitsPerPage
            }
            setNewData(data)
        })
    }

    const cleanData = () => {
        setNewData()
        setCurrentPage(1)
    }

    useEffect(() => {
        data && setNewData(data)
    }, [data])


    return (
        <>
            <table className="table">
                {!!newData && <TableHeader headerNames = {['№',...headerNames]} />}

                {!!newData && <TableBody newData={newData} />}

                {!!newData && <TableFooter amountOfUnits={newData.length} footerNames={footerNames} />}
            </table>


            <button type="button" className="btn btn-secondary m-3" onClick={getData}>show {maxUnitsPerPage} points</button>

            {!!newData && <button type="button" className="btn btn-danger m-3" onClick={cleanData}>clean data</button>}



        </>
    )
}

export default Table