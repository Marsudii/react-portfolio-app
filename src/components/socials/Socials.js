import React from 'react';
import { Link } from 'react-router-dom';

import GitHubIco from './icons/github.svg';
import PhoneIco from './icons/phone.svg';
import TelegaIco from './icons/telegram.svg';
import CVIco from './icons/cv.svg';

import './Socials.scss';

function Socials() {
  return (
    <div className="contact-menu d-flex-c">
      <Link to={location => ({ ...location, pathname: "https://github.com/buhowski" })} target="_blank">
        <span className="title">GitHub</span>
        <span className="icon" style={{backgroundImage: `url(${GitHubIco})`}}></span>
      </Link>
      <a href="tel:+380993129768">
          <span className="title">Call</span>
          <span className="icon" style={{backgroundImage: `url(${PhoneIco})`}}></span>
      </a>
      <Link to={location => ({ ...location, pathname: "https://t.me/buhowski" })} target="_blank">
        <span className="title">Telegram</span>
        <span className="icon" style={{backgroundImage: `url(${TelegaIco})`}}></span>
      </Link>
      <Link to={location => ({ ...location, pathname: "https://drive.google.com/file/d/1ZNQwrTcWmC4nIzD5g9TQvPPZ_N2rOpO3/view?usp=sharing" })} target="_blank">
        <span className="title">CV</span>
        <span className="icon" style={{backgroundImage: `url(${CVIco})`}}></span>
      </Link>
    </div>
  )
}

export default Socials;