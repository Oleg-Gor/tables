import { useState, useEffect } from "react"
import { getPastLaunches } from "../api/api"
import Spinner from "../components/Spinner"
import Table from "../components/Table"


const PastLaunches = () => {
    const headerNames = ["Name", "Image", "Date", "Details"];
    const portionSize = 3;

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () => {
        setIsLoading(true)
        await getPastLaunches().then(data => {
            setData(data)
            setIsLoading(false)
        })
    }
    useEffect(() => {
        getData()
    },[]) 

    return (
        <div className={isLoading? 'container darkTheme': 'container'}>
            {!!isLoading && <Spinner />}
            <h1 className="m-3">Past Launches</h1>
            {data && <Table data={data} headerNames= {headerNames} portionSize={portionSize} />}
        </div>
    )
}

export default PastLaunches