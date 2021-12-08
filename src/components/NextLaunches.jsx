const NextLaunchesComponent = ({data}) => {
    console.log('data ', data)
    return (<div className="card mb-3">
  <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
    <p className="card-text">It will be {data.flight_number}-th flight</p>
    <p className="card-text"><small className="text-muted">Date: {new Date(data.date_local).toDateString()} </small></p>
  </div>
</div>)
}
export default NextLaunchesComponent