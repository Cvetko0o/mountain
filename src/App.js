import './App.css';
import Navbar from './Navbar'
import Main from './Main'
import data from './data'


function App() {

  const dataTravel = data.map(el => {
    return (<Main
      title= {el.title}
      location={el.location}
      googleMapsUrl="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
      startDate={el.startDate}
      endDate={el.endDate}
      description={el.description}
      imageUrl={el.imageUrl}
    />)
  })

  return (
    <div className='page--style'>
      <Navbar />
      {dataTravel}
    </div>
  );
}

export default App;
