import './App.css';
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'
import cardsData from './components/data'

function App() {
  const dataElement = cardsData.map(data  => {
    return <Card 
      key={data.id}
      data={data}
      />
  })


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
      {dataElement}
      </section>
    </div>
  );
}

export default App;
