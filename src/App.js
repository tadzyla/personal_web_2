import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import LogRocket from 'logrocket';


const App = () => {
  LogRocket.init('qdn83f/personalweb');
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