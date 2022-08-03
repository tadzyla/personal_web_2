import React from 'react'
import './about.css'
import  ABOUTME  from '../../assets/about_me.png'
import { FaAward } from 'react-icons/fa'
import { SiWebpack } from 'react-icons/si'
import { GiMountains } from 'react-icons/gi'

const About = () => {
  return (
    <div id='about'>
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
              <small>1+ year</small>
            </article>
            <article className="about_card">
            < SiWebpack className='about_icon'/>
              <h5>Technologies</h5>
              <small>HTML CSS JAVASCRIPT REACT NODE</small>
            </article>
            <article className="about_card">
            < GiMountains className='about_icon'/>
              <h5>Hobbies</h5>
              <small>Hiking Running Travel Photography</small>
            </article>
          </div>
              <p>
                &nbsp;&nbsp;  Hello my name is Tadas. I am Web Developer with a passion for creativity and working with the latest technologies available. I am adept in all stages of web design and development.  
                Thank you for visiting my personal web, here you can find projects I did in the past, social media links and link to Github profile.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </container>
    </div>
  )
}

export default About