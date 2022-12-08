

export default function Main(props) {
    console.log(props)
    return (
        <div>
            <img className="googleMapsUrl" src="https://goo.gl/maps/1DGM5WrWnATgkSNB8" alt=""/>
            <h3 className="location">{props.location}</h3>
            <p>View on Google Maps</p>
            <h2 className="title">Mount Fuji</h2>
            <img className="imageUrl" src="https://source.unsplash.com/WLxQvbMyfas" alt="" width="200px" />
            <p className="startDate">12 Jan, 2021</p>
            <p> - </p>
            <p className="endDate">24 Jan, 2021</p>
            <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
    )
}