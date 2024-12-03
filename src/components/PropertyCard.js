import React from 'react';
import '../styles/PropertyCard.css';

function PropertyCard({ property }) {
  const { title, price, location, bedrooms, bathrooms, area, imageUrl } = property;

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="property-info">
        <h3>{title}</h3>
        <p className="price">${price.toLocaleString()}</p>
        <p className="location">{location}</p>
        <div className="property-details">
          <span>{bedrooms} beds</span>
          <span>{bathrooms} baths</span>
          <span>{area} sq ft</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard; 