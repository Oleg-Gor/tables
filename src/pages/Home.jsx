import {  useState } from "react"
import { getPastLaunches } from "../api/api"
import Table from "../components/Tabl"


const Home = () => {

    const [data, setData] = useState()

    const getData = async () => {
        await getPastLaunches().then(data => setData(data))
    }

    return (
        <div className = 'container'>
            <h1>Table</h1>
            <button  type="button" className="btn btn-secondary" onClick={getData}> Show all of units</button>
            <Table data={data} />
        </div>
    )
}

export default Home