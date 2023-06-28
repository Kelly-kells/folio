
import React from 'react'
import Navbar from "./sections/navbar/Navbar"
import Header from "./sections/header/Header"
import About from "./sections/about/About"
import Services from "./sections/services/Services"
import Contact from "./sections/Contact/Contact"
import Footer from "./sections/footer/Footer"
import FloatingNav from "./sections/floating-nav/FloatingNav"


const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}

export default App
