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
                About Yellow Estate
              </h1>
              <p className="text-lg text-primary-600 mb-6">
                With over two decades of experience in the real estate market, 
                Yellow Estate has established itself as a leading force in 
                property sales and acquisitions. Our commitment to excellence 
                and customer satisfaction sets us apart in the industry.
              </p>
              <p className="text-lg text-primary-600 mb-8">
                We believe in creating lasting relationships with our clients, 
                understanding their needs, and delivering results that exceed 
                expectations. Our team of experienced professionals is dedicated 
                to making your real estate journey seamless and successful.
              </p>
              <Link 
                href="/contact" 
                className="btn-primary inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
