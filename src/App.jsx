
import React from 'react'
import Navbar from "./sections/navbar/Navbar"
import Header from "./sections/header/Header"
import Skills from "./sections/skills/Skills"
import Services from "./sections/services/Services"
import Folio from './sections/portfolio/Folio'
import Contact from "./sections/contact/Contact"
import Footer from "./sections/footer/Footer"



const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      
      <Services/>
      <Skills/>
      <Folio/>
      <Contact/>
      <Footer/>
     
    </main>
  )
}

export default App
