

export default function Main(props) {
    console.log(props)
    
    return (
        <div className="main">
            <img src="https://img.freepik.com/free-vector/location_53876-25530.jpg?w=2000" alt="" className="image--icon"/>
            <h3 className="location">{props.location}</h3>
            <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" className="maps">View on Google Maps</a>
            <h2 className="title">{props.title}</h2>
            <img src={props.imageUrl} alt="" className="image--address" />
            <p className="startDate">{props.startDate}</p>
            <p className="dash--date"> - </p>
            <p className="endDate">{props.endDate}</p>
            <p>{props.description}</p>
        </div>
    )
}