import Header from './components/Header'
import Banner from './components/Banner'
import Cart from './components/Cart'
import Filter from './components/Filter'
import {results} from './datas.js'
import { formatDatas } from './utils.js'
import './App.css'

function App() {
    const formatEvents = results.map(formatDatas);
  return (
    <>
      <Header/> 
      <Banner/>
      <main>
        <section id="box-container">
          <Filter/>
          {formatEvents.map((event)=>(
            <Cart
              key={event.id}
              evenement={event.evenement}
              description={event.description}
              adresse={event.adresse}
              prix={event.prix}
              accèsPMR={event.accèsPMR}/>
            ))}  
        </section>
      </main>      
    </>
  )
}

export default App
