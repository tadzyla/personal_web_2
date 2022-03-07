import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
    </>
      
  )
}

export default App