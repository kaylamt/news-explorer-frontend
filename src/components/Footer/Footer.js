import React from 'react';
import facebook from '../../images/facebook-icon.svg'
import github from '../../images/github-icon.svg'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__copyright">© 2021 Supersite, Powered by News API</p>
        <div className="footer__links">
          <div className="footer__page-links">
            <p className="footer__link">Home</p>
            <a className="footer__link" href="https://practicum.yandex.com/web/">Practicum by Yandex</a>
          </div>
          <div className="footer__social-links">
            <a class="footer__social-link" href="https://github.com/kaylamt">
              <img class="footer__social-icon" src={github} alt="github-icon"></img>
            </a>
            <a class="footer__social-link" href="https://www.facebook.com/kayla.thomas.9083">
              <img class="footer__social-icon" src={facebook} alt="facebook-icon"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;