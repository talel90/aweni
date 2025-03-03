import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {[
          { title: 'Top Cities', items: ['Sfax', 'Tunis', 'soussa','gabes'] },
          { title: 'Homeowner Services', items: ['Find local businesses', 'Services near me'] },
          { title: 'For Service Pros', items: ['Register your business', 'Business center'] },
          { title: 'Resources', items: ['Solution center', 'Project cost center'] },
          { title: 'About Us', items: ['How it works', 'Who we are', 'Contact us'] },
        ].map((section) => (
          <div className="footer-section" key={section.title}>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="footer-newsletter">
          <h3>Sign up for free project cost information</h3>
          <form>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="ZIP code" />
            <button type="submit">Sign up</button>
          </form>
        </div>
        <div className="footer-apps">
          <h3>Download the app:</h3>
          <a href="#">
            <img src="/images/app-store-badge-60@2x.avif" alt="Download on the App Store" />
          </a>
          <a href="#">
            <img src="/images/google-play-badge-60@2x.webp" alt="GET IT ON Google Play" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
