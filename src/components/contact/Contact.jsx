import React from 'react'
import './contact.css'
import { AiOutlineMail } from "react-icons/ai"
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qr29dqc', 'template_4ecnsss', form.current, 'cS2cTUM84HxMJwFJC')
     e.target.reset();
    }
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
        <div className="container contact_container">
          <div className="contact_options">
            <artticle className="contact_option">
              <AiOutlineMail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>tadas.zvinklys@gmail.com</h5>
              <a href="mailto:tadas.zvinklys@gmail.com" target="_blank" rel='noreferrer'>Send a message</a>
            </artticle>
            <artticle className="contact_option">
              <RiMessengerLine className='contact_option-icon'/>
              <h4>Messenger</h4>
              <h5>Tad As</h5>
              <a href="https://m.me/tadas.zvinklys.9/" target="_blank" rel='noreferrer'>Send a message</a>
            </artticle>
            <artticle className="contact_option">
              <AiOutlineWhatsApp className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+4475 . . . 27</h5>
              <a href="https://api.whatsapp.com/send?phone=447543967427" target="_blank" rel='noreferrer'>Send a message</a>
            </artticle>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='You Name' required />
            <input type="email" name='email' placeholder='You Email' required />
            <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send a message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact