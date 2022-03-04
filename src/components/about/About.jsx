import React from 'react'
import './about.css'
import  ABOUTME  from '../../assets/about_me.png'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <container className="about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ABOUTME} alt="about me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
            < FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ year experience</small>
            </article>
            <p>
              Hello my name is Tadas. I am self taught front end developer.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
          </div>
        </div>
      </container>
    </section>
  )
}

export default About