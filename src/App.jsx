import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import Cart from './components/Cart.jsx'
import Filter from './components/Filter'
import './App.css'

function App() {
  
  return (
    <>
      <Header/> 
      <Banner/>
      <section id="box-container">
        <Filter/>
        <Cart/>
        <Cart/>
        <Cart/>
      </section>
            
    </>
  )
}

export default App
