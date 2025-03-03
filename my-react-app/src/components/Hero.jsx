import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Find Trusted Local Services</h1>
      <div className="search-bar">
        <input type="text" placeholder="How can we help?" />
        <input type="text" placeholder="Country" />
        <button>Search</button>
      </div>
    </section>
  );
}

export default Hero;