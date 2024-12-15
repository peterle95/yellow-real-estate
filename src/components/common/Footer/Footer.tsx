import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-footer text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Yellow Estate</h3>
            <p className="text-primary-300">
              Your trusted partner in finding the perfect home.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/properties" className="text-primary-300 hover:text-white">Properties</Link></li>
              <li><Link href="/about" className="text-primary-300 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-primary-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-primary-300">
              <li>123 Real Estate Ave</li>
              <li>San Francisco, CA 94105</li>
              <li>contact@yellowestate.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-white">Facebook</a>
              <a href="#" className="text-primary-300 hover:text-white">Twitter</a>
              <a href="#" className="text-primary-300 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-800 text-center text-primary-400">
          <p>&copy; {new Date().getFullYear()} Yellow Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 