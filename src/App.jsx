import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Head from './Components/Head/Head'
import Menu from './Components/Menu/Menu'
import New from './Components/New/New'
import Location from './Components/Location/Location'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Head/>
      <Menu/>
      <New/>
      <Location/>
      <Footer/>
    </div>
  )
}

export default App