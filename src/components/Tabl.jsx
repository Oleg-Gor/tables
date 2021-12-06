import { useEffect, useState } from "react"
import { getPastLaunches } from "../api/api"

const Table = ({ data }) => {

    const maxUnitsPerPage = 10;

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

    const cleanData = ()=> {
        setNewData([])
    }

    useEffect(() => {
        data && setNewData(data)
    }, [data])



    return (
        <>
            <table className="table">
                {!!newData && <>
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">name</th>
                            <th scope="col">date_local</th>
                            <th scope="col">details</th>
                        </tr>
                    </thead>
                </>
                }
                <tbody>
                    {!!newData && newData.map((elem, index) => {
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
                {!!newData && <>
                    <tfoot>
                        <tr>
                            <th colSpan="3" >ИТОГО:</th><th>{newData.length} units </th>
                        </tr>
                    </tfoot>
                </>
                }
            </table>


            <button type="button" className="btn btn-secondary" onClick={getData} >show {maxUnitsPerPage} points</button>

        </>
    )
}

export default Table