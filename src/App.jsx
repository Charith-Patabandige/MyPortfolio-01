import React, { useState }from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {

  const [playState, setPlayState] = useState(false);
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
        <Programs/>
        <Title subTitle='Galery' title='Skills'/>
        <Campus/>
        <Title subTitle='Testimonials' title='Portfolio'/>
        <Testimonials/>
        <Title subTitle='Contact Me' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
