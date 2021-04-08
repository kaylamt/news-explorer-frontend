import React from 'react';
import facebook from '../../images/facebook-icon.svg'
import github from '../../images/github-icon.svg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__copyright">© {new Date().getFullYear()} Supersite, Powered by News API</p>
        <div className="footer__links">
          <div className="footer__page-links">
            <Link to="/" className="footer__link">Home</Link>
            <a className="footer__link" href="https://practicum.yandex.com/web/" target="_blank" rel="noreferrer">Practicum by Yandex</a>
          </div>
          <div className="footer__social-links">
            <a className="footer__social-link" href="https://github.com/kaylamt" target="_blank" rel="noreferrer">
              <img className="footer__social-icon" src={github} alt="github-icon"></img>
            </a>
            <a className="footer__social-link" href="https://www.facebook.com/kayla.thomas.9083" target="_blank" rel="noreferrer" >
              <img className="footer__social-icon" src={facebook} alt="facebook-icon"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;