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
  },
  {
    id: 7,
    title: 'Charming Cottage',
    price: 450000,
    location: 'Sonoma, California',
    beds: 2,
    baths: 1,
    sqft: 900,
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
  },
  {
    id: 8,
    title: 'Spacious Family Home',
    price: 850000,
    location: 'Fremont, California',
    beds: 4,
    baths: 3,
    sqft: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1560185127-6b8c1c1c1c1c?auto=format&fit=crop&q=80',
  },
  {
    id: 9,
    title: 'Urban Loft',
    price: 700000,
    location: 'Oakland, California',
    beds: 1,
    baths: 1,
    sqft: 1100,
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
  },
  {
    id: 10,
    title: 'Luxury Condo',
    price: 1200000,
    location: 'San Jose, California',
    beds: 3,
    baths: 2,
    sqft: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
  },
  {
    id: 11,
    title: 'Cozy Cabin',
    price: 300000,
    location: 'Lake Tahoe, California',
    beds: 2,
    baths: 1,
    sqft: 800,
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
  },
  {
    id: 12,
    title: 'Modern Farmhouse',
    price: 950000,
    location: 'Napa Valley, California',
    beds: 4,
    baths: 3,
    sqft: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
  },
  {
    id: 13,
    title: 'Stylish Bungalow',
    price: 600000,
    location: 'Santa Cruz, California',
    beds: 3,
    baths: 2,
    sqft: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
  },
  {
    id: 14,
    title: 'Elegant Townhouse',
    price: 1100000,
    location: 'Palo Alto, California',
    beds: 3,
    baths: 2,
    sqft: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
  },
  {
    id: 15,
    title: 'Contemporary Villa',
    price: 2500000,
    location: 'Bel Air, California',
    beds: 5,
    baths: 5,
    sqft: 5000,
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
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

const PROPERTIES_PER_PAGE = 3;

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrompt, setShowPrompt] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: { min: 0, max: Number.MAX_SAFE_INTEGER },
    sqftRange: { min: 0, max: Number.MAX_SAFE_INTEGER },
    beds: '',
    baths: ''
  });
  const [appliedFilters, setAppliedFilters] = useState<FilterState>(filters);
  const [currentPage, setCurrentPage] = useState(1);

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

  const visibleProperties = filteredProperties.slice(0, currentPage * PROPERTIES_PER_PAGE);
  const hasMoreProperties = visibleProperties.length < filteredProperties.length;

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
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
