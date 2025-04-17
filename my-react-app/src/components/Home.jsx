import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
    return (
        <div className="app-container">
            <header className="header">
                <div className="logo">
                    <Link to="/" className="brand-link">
                        <h1 className="brand-text">𝔸𝕨𝕖𝕟𝕚</h1>
                    </Link>
                </div>
                <nav className="nav">
                    <div className="auth-buttons">
                        <Link to="/components/login"><button className="sign-up">Log In</button></Link>
                        <Link to="/components/SignUp"><button className="sign-up">Sign Up</button></Link>
                    </div>
                </nav>
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
                        <ul className='cites'>
                            <li>Sfax</li>
                            <li>Tunis</li>
                            <li>Sousse</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Homeowner Services</h3>
                        <ul>
                            <li><a href="#">Find local businesses</a></li>
                            <li><a href="#">Services near me</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>For Service Pros</h3>
                        <ul>
                            <li><a href="#">Register your business</a></li>
                            <li><a href="#">Business center</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Solution center</a></li>
                            <li><a href="#">Project cost center</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>About Us</h3>
                        <ul>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Who we are</a></li>
                            <li><a href="#">Contact us</a></li>
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
                        <a href="#" className="download">
                            <img src="/images/app-store-badge-60@2x.avif" alt="Download on the App Store" />
                        </a>
                        <a href="#" className="download">
                            <img src="/images/google-play-badge-60@2x.webp" alt="GET IT ON Google Play" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home; 