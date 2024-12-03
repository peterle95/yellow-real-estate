import React from 'react';
import PropertyCard from '../components/PropertyCard';
import '../styles/Home.css';

function Home() {
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: 450000,
      location: "Downtown, City",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 2,
      title: "Suburban Family Home",
      price: 750000,
      location: "Suburb Area, City",
      bedrooms: 4,
      bathrooms: 3,
      area: 2500,
      imageUrl: "https://placehold.co/600x400"
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>Find Your Dream Property</h1>
        <p>Discover the perfect home with Yellow Real Estate</p>
      </section>
      
      <section className="featured-properties">
        <h2>Featured Properties</h2>
        <div className="property-grid">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
