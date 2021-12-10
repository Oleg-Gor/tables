import { useState, useEffect } from "react"
import { getNextLaunches } from "../api/api"
import NextLaunchesComponent from "../components/NextLaunches"
import Spinner from "../components/Spinner"


const NextLaunches = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const getData = async () => {
    setIsLoading(true)
    await getNextLaunches().then(data => {
      setData(data)
      setIsLoading(false)
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className={isLoading ? 'container darkTheme' : 'container'}>
      {!!isLoading && <Spinner />}
      <h1 className="m-3">Next Launches</h1>
      {data && <NextLaunchesComponent data={data} />}
    </div>
  )
}

export default NextLaunches