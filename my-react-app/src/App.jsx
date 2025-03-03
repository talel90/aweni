import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import './App.css'; // Add your CSS styling here or use a library like TailwindCSS or Bootstrap

function App() {
  return (
    
    <div className="app-container">
      <header className="header">
        <div className="logo">𝔸𝕨𝕖𝕟𝕚</div>
        <nav className="nav">
        </nav>
        
        <div className="auth-buttons">
        <button>Log In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1></h1>
          <div className="search-bar">
            <input type="text" placeholder="How can we help?" />
            <input type="text" placeholder="country " />
            <button>Search</button>
          </div>
        </section>
        
        

        {/* Icon Bar Section */}
        <section className="icon-bar">
          <div className="icon-item">
            <img src="/images/HandyPerson.svg" alt="Handyperson" />
            <span>Handyperson</span>
          </div>
          <div className="icon-item">
            <img src="/images/LandScaping.svg" alt="Landscaping" />
            <span>Landscaping</span>
          </div>
          <div className="icon-item">
            <img src="/images/Plumbing.svg" alt="Plumbing" />
            <span>Plumbing</span>
          </div>
          <div className="icon-item">
            <img src="/images/Electrical.svg" alt="Electrical" />
            <span>Electrical</span>
          </div>
          <div className="icon-item">
            <img src="/images/Remodeling.svg" alt="Remodeling" />
            <span>Remodeling</span>
          </div>
          <div className="icon-item">
            <img src="/images/Roof.svg" alt="Roofing" />
            <span>Roofing</span>
          </div>
          <div className="icon-item">
            <img src="/images/Painting.svg" alt="Painting" />
            <span>Painting</span>
          </div>
        </section>

        <section className="services">
          <h2>Recommended for you</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Handyman for Multiple Small Projects</h3>
              <button>Get quotes</button>
            </div>
            <div className="service-card">
              <h3>One Time Interior House Cleaning</h3>
              <button>Get quotes</button>
            </div>
            <div className="service-card">
              <h3>Plumbing</h3>
              <button>Get quotes</button>
            </div>
          </div>
        </section>
        <section className="additional-services">
          <h2>Popular home projects</h2>
          <div className="home-projects-grid">
            <div className="project-card">
              <h3>Holiday Light Hanging</h3>
              <p>4.5 (6k) | from $195</p>
            </div>
            <div className="project-card">
              <h3>Handyperson for Small Projects</h3>
              <p>4.6 (599k) | from $158</p>
            </div>
            <div className="project-card">
              <h3>One-time Cleaning Service</h3>
              <p>4.5 (314k) | from $102</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-section">
            <h3>Top Cities</h3>
            <ul>
              <li>sfax</li>
              <li>tunis</li>
              <li>arousa</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Homeowner Services</h3>
            <ul>
              <li>Find local businesses</li>
              <li>Services near me</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>For Service Pros</h3>
            <ul>
              <li>Register your business</li>
              <li>Business center</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li>Solution center</li>
              <li>Project cost center</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li>How it works</li>
              <li>Who we are</li>
              <li>Contact us</li>
            </ul>
          </div>
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
  
    </div>
  );
}

export default App;
