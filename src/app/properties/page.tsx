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
  {
    id: 4,
    title: 'Waterfront Penthouse',
    price: 2499000,
    location: 'Marina District, San Francisco',
    beds: 3,
    baths: 3,
    sqft: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Historic Victorian',
    price: 1850000,
    location: 'Pacific Heights, San Francisco',
    beds: 4,
    baths: 3,
    sqft: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Mountain View Estate',
    price: 3200000,
    location: 'Mill Valley, California',
    beds: 5,
    baths: 4,
    sqft: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
  }
];

interface FilterState {
  priceRange: {
    min: number;
    max: number;
  };
  sqftRange: {
    min: number;
    max: number;
  };
  beds: number | '';
  baths: number | '';
}

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrompt, setShowPrompt] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: { min: 0, max: 2000000 },
    sqftRange: { min: 0, max: 5000 },
    beds: '',
    baths: ''
  });
  const [appliedFilters, setAppliedFilters] = useState<FilterState>(filters);

  const filteredProperties = FEATURED_PROPERTIES.filter(property => {
    const matchesLocation = property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = property.price >= appliedFilters.priceRange.min && 
                        property.price <= appliedFilters.priceRange.max;
    const matchesSqft = property.sqft >= appliedFilters.sqftRange.min && 
                       property.sqft <= appliedFilters.sqftRange.max;
    const matchesBeds = appliedFilters.beds === '' || property.beds === appliedFilters.beds;
    const matchesBaths = appliedFilters.baths === '' || property.baths === appliedFilters.baths;

    return matchesLocation && matchesPrice && matchesSqft && matchesBeds && matchesBaths;
  });

  const visibleProperties = filteredProperties.slice(0, visibleCount);
  const hasMoreProperties = visibleCount < filteredProperties.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredProperties.length));
  };

  const handleFilterChange = (
    filterType: keyof FilterState,
    value: number | string,
    subType?: 'min' | 'max'
  ) => {
    setFilters(prev => {
      if (filterType === 'priceRange' || filterType === 'sqftRange') {
        return {
          ...prev,
          [filterType]: {
            ...prev[filterType],
            [subType!]: Number(value)
          }
        };
      }
      return {
        ...prev,
        [filterType]: value === '' ? '' : Number(value)
      };
    });
  };

  const handleApplyFilters = () => {
    setAppliedFilters(filters);
    setShowFilters(false);
  };

  const handleClearFilters = () => {
    setFilters({
      priceRange: { min: 0, max: 2000000 },
      sqftRange: { min: 0, max: 5000 },
      beds: '',
      baths: ''
    });
    setAppliedFilters(filters);
    setShowFilters(false);
  };

  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-heading font-bold text-primary-900">
                Properties
              </h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="btn-secondary"
                >
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
                <button
                  onClick={handleClearFilters}
                  className="btn-secondary bg-red-100 hover:bg-red-200 text-red-700"
                >
                  Clear Filters
                </button>
              </div>
            </div>
            
            {/* Search and Filters Section */}
            <div className="space-y-4">
              {/* Location Search */}
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

              {/* Filters Panel */}
              {showFilters && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Price Range */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Price Range</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          placeholder="Min"
                          value={filters.priceRange.min}
                          onChange={(e) => handleFilterChange('priceRange', e.target.value, 'min')}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          value={filters.priceRange.max}
                          onChange={(e) => handleFilterChange('priceRange', e.target.value, 'max')}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                    </div>

                    {/* Square Footage */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Square Footage</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          placeholder="Min"
                          value={filters.sqftRange.min}
                          onChange={(e) => handleFilterChange('sqftRange', e.target.value, 'min')}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          value={filters.sqftRange.max}
                          onChange={(e) => handleFilterChange('sqftRange', e.target.value, 'max')}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                    </div>

                    {/* Bedrooms */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
                      <select
                        value={filters.beds}
                        onChange={(e) => handleFilterChange('beds', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                      >
                        <option value="">Any</option>
                        {[1, 2, 3, 4, 5].map(num => (
                          <option key={num} value={num}>{num}+ beds</option>
                        ))}
                      </select>
                    </div>

                    {/* Bathrooms */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
                      <select
                        value={filters.baths}
                        onChange={(e) => handleFilterChange('baths', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                      >
                        <option value="">Any</option>
                        {[1, 2, 3, 4, 5].map(num => (
                          <option key={num} value={num}>{num}+ baths</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={handleApplyFilters}
                      className="btn-primary"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProperties.length > 0 ? (
                visibleProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-lg text-primary-600">
                    No properties found matching your criteria. Try adjusting your filters.
                  </p>
                </div>
              )}
            </div>

            {hasMoreProperties && (
              <div className="text-center">
                <button
                  onClick={handleLoadMore}
                  className="btn-secondary"
                >
                  Load More Properties
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
