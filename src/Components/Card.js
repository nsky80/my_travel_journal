
export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            
            <div className="row">
                <div className="column-1">
                    <img src={props.imageUrl} alt="destination" className="card--image"/>
                </div>
                
                <div className="column-2">
                    {props.location}
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                    {props.title}
                    {props.startDate}-{props.endDate}
                    {props.description}
                </div>
            </div>
            <hr />
        </div>
    )
}