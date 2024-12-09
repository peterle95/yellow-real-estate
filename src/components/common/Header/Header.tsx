import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-heading font-bold text-primary-900">
            Yellow Estate
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/listings" className="text-primary-600 hover:text-primary-900">
              Properties
            </Link>
            <Link href="/about" className="text-primary-600 hover:text-primary-900">
              About
            </Link>
            <Link href="/contact" className="text-primary-600 hover:text-primary-900">
              Contact
            </Link>
            <Link href="/login" className="btn-primary">
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}; 