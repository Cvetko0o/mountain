

export default function Main(props) {
    console.log(props)
    
    return (
        <div>
            <img src="https://goo.gl/maps/1DGM5WrWnATgkSNB8" alt=""/>
            <h3>{props.location}</h3>
            <p>View on Google Maps</p>
            <h2>{props.title}</h2>
            <img src={props.imageUrl} alt="" width="200px" />
            <p>{props.startDate}</p>
            <p> - </p>
            <p>{props.endDate}</p>
            <p>{props.description}</p>
        </div>
    )
}