import Image from 'next/image';

interface PropertyCardProps {
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
}

export const PropertyCard = ({
  title,
  price,
  location,
  beds,
  baths,
  sqft,
  imageUrl,
}: PropertyCardProps) => {
  const formatPrice = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full">
          ${formatPrice(price)}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-heading text-lg font-semibold text-primary-900 mb-2">
          {title}
        </h3>
        <p className="text-primary-600 mb-4">{location}</p>
        
        <div className="flex justify-between text-sm text-primary-500">
          <div className="flex items-center">
            <span className="mr-2">{beds}</span>
            <span>Beds</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">{baths}</span>
            <span>Baths</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">{formatPrice(sqft)}</span>
            <span>sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 