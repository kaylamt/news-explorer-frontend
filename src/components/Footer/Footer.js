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
          <ul className="footer__page-links">
            <li className="footer__link">
              <Link to="/" className="footer__link-home">Home</Link>
            </li>
            <li className="footer__link">
              <a className="footer__link-practicum" href="https://practicum.yandex.com/web/" target="_blank" rel="noreferrer">Practicum by Yandex</a>
            </li>
          </ul>
          <ul className="footer__social-links">
            <li className="footer__social-link">
              <a className="footer__social-link-github" href="https://github.com/kaylamt" target="_blank" rel="noreferrer">
                <img className="footer__social-icon" src={github} alt="github-icon"></img>
              </a>
            </li>
            <li className="footer__social-link">
              <a className="footer__social-link-facebook" href="https://www.facebook.com/kayla.thomas.9083" target="_blank" rel="noreferrer" >
                <img className="footer__social-icon" src={facebook} alt="facebook-icon"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;