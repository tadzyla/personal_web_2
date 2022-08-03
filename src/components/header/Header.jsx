import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import T from '../../assets/letterT.png'
import Z from '../../assets/letterZ.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
      <header>
        <div className="container header_container">
          <h5>Hello I am</h5>
          <h2>Tadas Zvinklys</h2>
          <h5 className="text-light">Web Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className='me'>
            <img src={ ME } alt="me" />
          </div>
          <div className='letterT'>
            <img src={T} alt="letterT" />
          </div>
          <div className='letterZ'>
              <img src={Z} alt="letterZ" />
          </div>
          <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
      </header>
    )
}

export default Header