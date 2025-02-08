"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image container with animation */}
          <div className="w-full lg:w-1/2 animate-slide-from-left">
            <div className="relative h-[400px] lg:h-[600px]">
              <Image
                src="/pics/cinzia.jpg"
                alt="Real Estate Office"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Text content with animation */}
          <div className="w-full lg:w-1/2 lg:-ml-16 z-10 animate-slide-from-right">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-6">
                Chi siamo:
              </h1>
              <p className="text-lg text-primary-600 mb-6">
                La nostra agenzia è stata creata per aiutarti a trovare la casa perfetta. Dopo 
                quattro generazioni, siamo riusciti a creare un'agenzia che si impegna 
                a fornire un servizio di alta qualità e un'esperienza unica.
              </p>
              <p className="text-lg text-primary-600 mb-8">
                Noi crediamo nella creazione di relazioni durature con i nostri clienti, 
                comprendendo le loro necessità e fornendo risultati che superano le aspettative. 
                Il nostro team di professionisti esperti è dedicato a rendere il tuo viaggio nel mercato 
                immobiliare senza imprevisti e riuscito.
              </p>
              <Link 
                href="/contact" 
                className="btn-primary inline-block"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
