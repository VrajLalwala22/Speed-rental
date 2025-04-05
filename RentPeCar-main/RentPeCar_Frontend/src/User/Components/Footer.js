import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer=()=> {
  return (
    <div
     className='footer-container'>
      <section className='footer-subscription'>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            Speed Rental
            </Link>
          </div>
          <small class='website-rights'>Speed Rental</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='//www.facebook.com'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>

            <Link
              class='social-icon-link youtube'
              to='//www.youtube.com'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='//www.twitter.com'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;