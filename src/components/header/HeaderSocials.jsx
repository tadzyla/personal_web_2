import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

function HeaderSocials() {
  return (

    <div className="header_socials">
        <a href="https://www.linkedin.com/in/tadas-zvinklys-80b020207/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/tadzyla" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://www.facebook.com/tadas.zvinklys.9/" target="_blank" rel='noreferrer'><BsFacebook/></a>
    </div>

    )
}

export default HeaderSocials