import { PropertyCard } from '@/components/property/PropertyCard/PropertyCard';
import Link from 'next/link';

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

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/pics/Genova.jpeg"
            alt="Genova Cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-white ml-4 sm:ml-8 md:ml-[300px] lg:ml-[500px] xl:ml-[700px] max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="ml-auto max-w-xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Discover the perfect property from our extensive collection of premium listings.
            </p>
            <div className="flex gap-4">
              <Link href="/properties" className="btn-primary">
                Browse Properties
              </Link>
              <Link href="/contact" className="btn-secondary bg-white text-primary-900">
                Contact Agent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50 properties-section">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary-900 mb-8">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/properties" className="btn-primary">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Expert Guidance
              </h3>
              <p className="text-primary-600">
                Our experienced agents will guide you through every step of your real estate journey.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Premium Listings
              </h3>
              <p className="text-primary-600">
                Access to exclusive properties that match your lifestyle and preferences.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Easy Process
              </h3>
              <p className="text-primary-600">
                Streamlined buying and selling process with transparent communication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
