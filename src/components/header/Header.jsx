import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
      <header>
        <div className="container header_container">
          <h5>Hello I am</h5>
          <h2>Tadas Zvinklys</h2>
          <h5 className="text-light">Front End developer</h5>
          <CTA />
          <HeaderSocials />

          <div className='me'>
            <img src={ ME } alt="me" />
          </div>

          <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
      </header>
    )
}

export default Header