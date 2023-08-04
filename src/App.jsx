import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'
import Experience from './components/experience/experience'
// import Services from './components/Services/Services'
import Portfolio from './components/portofolio/Portfolio'
import Footer from './components/footer/Footer'
// import Testimonials from './components/testimonials/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    {/* <Services/> */}
    <Portfolio/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App
