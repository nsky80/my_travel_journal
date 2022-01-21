
export default function Card(props) {
    return (
        <div className="card">

            <div className="row">
                <div className="column-1">
                    <img src={props.imageUrl} alt="destination" className="card--image" />
                </div>

                <div className="column-2">
                    <div className="card--info--section">
                        <span class="material-icons card--location-icon">place</span>
                        <span className="card--location">{props.location}&nbsp; &nbsp;</span>
                        <a href={props.googleMapsUrl} className="card--google-maps--link">View on Google Maps</a>                        <h1 className="card--title">{props.title}</h1>
                        <span className="card--date">{props.startDate}-{props.endDate}</span>
                        <p className="card--description">{props.description}</p>
                    </div>
                </div>
            </div>
            {/* <hr /> */}
        </div>
    )
}