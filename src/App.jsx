
import './App.css'
// import { TRUNCATER, FORMAT_CURRENCY, GET_DOLLAR_EQUIV } from './utils.js';
// import { LOGO_FULL } from './assets/icons';
import Navbar from './components/navbar';
import Hero from './components/hero';

function App() {

  return (
    <div className='w-[90%] mx-auto'>
      <Navbar/>
      <Hero />     
    </div>
  )
}

export default App
