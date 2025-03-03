import React from 'react';
import './AdditionalServices.css';

function AdditionalServices() {
  return (
    <section className="additional-services">
      <h2>Popular home projects</h2>
      <div className="home-projects-grid">
        {[
          { name: 'Holiday Light Hanging', rating: '4.5 (6k)', price: 'from $195' },
          { name: 'Handyperson for Small Projects', rating: '4.6 (599k)', price: 'from $158' },
          { name: 'One-time Cleaning Service', rating: '4.5 (314k)', price: 'from $102' },
        ].map((project) => (
          <div className="project-card" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.rating} | {project.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdditionalServices;