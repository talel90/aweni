import React from 'react';
import './IconBar.css';

function IconBar() {
  return (
    <section className="icon-bar">
      {['HandyPerson', 'LandScaping', 'Plumbing', 'Electrical', 'Remodeling', 'Roof', 'Painting'].map((service) => (
        <div className="icon-item" key={service}>
          <img src={`/images/${service}.svg`} alt={service} />
          <span>{service}</span>
        </div>
      ))}
    </section>
  );
}

export default IconBar;