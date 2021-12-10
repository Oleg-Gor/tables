import { useState, useEffect } from "react"
import { getAllLandpads } from "../api/api"
import Spinner from "../components/Spinner"
import Table from "../components/Table"


const Landpads = () => {
  const headerNames = ["Name", "Image", "Region", "Details"];

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)
    await getAllLandpads().then(data => {
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
      <h1 className="m-3">Land pads</h1>
      {data && <Table data={data} headerNames={headerNames} />}
    </div>
  )
}

export default Landpads