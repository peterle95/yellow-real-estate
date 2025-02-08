import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/pics/Genova.jpeg"
            alt="Panorama di Genova"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-white ml-4 sm:ml-8 md:ml-[300px] lg:ml-[500px] xl:ml-[700px] max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="ml-auto max-w-xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              La Casa dei Tuoi Sogni Ti Aspetta
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Scopri il lusso dell&apos;abitare con i nostri servizi immobiliari premium.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary">
                Inizia Ora
              </Link>
              <Link href="/about" className="btn-secondary bg-white text-primary-900">
                Scopri di Più
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary-900 mb-12 text-center">
            Perché Scegliere Yellow Estate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Consulenza Esperta
              </h3>
              <p className="text-primary-600">
                I nostri agenti esperti ti guideranno in ogni fase del tuo percorso immobiliare.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Selezione Premium
              </h3>
              <p className="text-primary-600">
                Accesso a immobili esclusivi che si adattano al tuo stile di vita e alle tue preferenze.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Processo Semplice
              </h3>
              <p className="text-primary-600">
                Processo di acquisto e vendita semplificato con comunicazione trasparente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-header text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Pronto a Trovare la Casa Perfetta?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lascia che ti aiutiamo a scoprire l&apos;immobile perfetto che si adatta ai tuoi sogni e al tuo stile di vita.
          </p>
          <Link href="/contact" className="btn-primary">  
            Contattaci Oggi
          </Link>
        </div>
      </section>
    </div>
  );
}
