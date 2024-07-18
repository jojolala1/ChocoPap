import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  let component

  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
      case "/pricing":
        component = <Pricing/>
        break
        case "/about":
          component = <About/>

        break
  }

  return (
    <div className="d-flex flex-column divApp" >
    <Navbar/>
      {component}
    <Footer/>
    </div>
  )
}

export default App
