"use client";

import { PropertyCard } from '@/components/property/PropertyCard/PropertyCard';
import { useState } from 'react';

const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    price: 599000,
    location: 'Downtown, San Francisco',
    beds: 2,
    baths: 2,
    sqft: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Luxury Beach House',
    price: 1299000,
    location: 'Malibu, California',
    beds: 4,
    baths: 3,
    sqft: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Cozy Suburban Home',
    price: 749000,
    location: 'Berkeley, California',
    beds: 3,
    baths: 2,
    sqft: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
  },
];

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrompt, setShowPrompt] = useState(true);

  const filteredProperties = FEATURED_PROPERTIES.filter(property =>
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold text-primary-900 mb-4">
              Properties
            </h2>
            
            {/* Search Section */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search by location (e.g., San Francisco, Berkeley)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowPrompt(false);
                }}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-lg text-primary-600">
                  No properties found in this location. Try searching for a different area.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
