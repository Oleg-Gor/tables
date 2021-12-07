import { useState } from "react"
import { getPastLaunches } from "../api/api"
import Spinner from "../components/Spinner"
import Table from "../components/Table"


const Home = () => {

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () => {
        setIsLoading(true)
        await getPastLaunches().then(data => {
            setData(data)
            setIsLoading(false)
        })
    }

    return (
        <div className={isLoading? 'container darkTheme': 'container'}>
            {!!isLoading && <Spinner />}
            <h1 className="m-3">Table</h1>
            <Table data={data} setIsLoading = {setIsLoading} />
        </div>
    )
}

export default Home