import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleGetQuotesClick = (service) => {
    setSelectedService(service);
  };

  const handleBackClick = () => {
    setSelectedService(null);
  };

  return (
    <div>
      {!selectedService ? (
        <section className="services">
          <h2>Recommended for you</h2>
          <div className="service-grid">
            {['Handyman for Multiple Small Projects', 'One Time Interior House Cleaning', 'Plumbing'].map((service) => (
              <div className="service-card" key={service}>
                <h3>{service}</h3>
                <button onClick={() => handleGetQuotesClick(service)}>Get quotes</button>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="confirmation">
          <h2>You selected: {selectedService}</h2>
          <p>We will provide quotes soon.</p>
          <button onClick={handleBackClick}>Back</button>
        </div>
      )}
    </div>
  );
}

export default Services;



