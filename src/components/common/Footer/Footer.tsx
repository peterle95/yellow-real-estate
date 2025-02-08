import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-footer text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Yellow</h3>
            <p className="text-primary-300">
              Il tuo partner di fiducia nella ricerca della casa perfetta.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-primary-300 hover:text-white">Chi Siamo</Link></li>
              <li><Link href="/contact" className="text-primary-300 hover:text-white">Contatti</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contattaci</h4>
            <ul className="space-y-2 text-primary-300">
              <li>Via Immobiliare 123</li>
              <li>Genova, GE 16121</li>
              <li>yellow2025srl@gmail.com</li>
              <li>(+39) 010 123 4567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Seguici</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-white">Facebook</a>
              <a href="#" className="text-primary-300 hover:text-white">Twitter</a>
              <a href="#" className="text-primary-300 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-800 text-center text-primary-400">
          <p>&copy; {new Date().getFullYear()} Immobiliare Giallo. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}; 