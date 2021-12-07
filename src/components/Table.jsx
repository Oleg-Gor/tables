import { useEffect, useState } from "react"
import { getPastLaunches } from "../api/api"
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

const Table = ({ data, setIsLoading }) => {

    const headerNames = ['name', 'img', 'date_local', 'details']

    const [newData, setNewData] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [amountOfUnitsPerPage, setAmountOfUnitsPerPage] = useState(10)
    const [maxUnitsPerPage, setMaxUnitsPerPage] = useState()
    const [amountOfPages, setAmountOfPages] = useState()

    const getData = async () => {
        setIsLoading(true)
        await getPastLaunches().then(data => {

            const amountOfUnits = data.length
            setMaxUnitsPerPage(amountOfUnits)
            setAmountOfPages(Math.ceil(amountOfUnits / amountOfUnitsPerPage))

            const begin = currentPage === 1 ? 0 : (currentPage - 1) * amountOfUnitsPerPage
            const end = Number(begin + amountOfUnitsPerPage) > amountOfUnits - 1 ? amountOfUnits - 1 : Number(begin + amountOfUnitsPerPage)

            let newData = data.slice(begin, end)

            setNewData(newData)


            setIsLoading(false)
        })
    }
    useEffect(() => {
        data && setNewData(data)
    }, [data])

    useEffect(() => {
        getData()
        setCurrentPage(1)
    }, [amountOfUnitsPerPage])

    useEffect(() => {
        getData()
    }, [currentPage])


    return (
        <>
            <table className="table">
                {!!newData && <TableHeader headerNames={headerNames} />}
                {!!newData && < TableBody newData={newData} />}
                {!!newData && <TableFooter maxUnitsPerPage={maxUnitsPerPage}
                    setAmountOfUnitsPerPage={setAmountOfUnitsPerPage}
                    amountOfPages={amountOfPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    amountOfCows={headerNames.length}
                />}
            </table>
        </>
    )
}

export default Table