interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-blue-700 font-medium">Centro de formación médica</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Cuidamos tu salud con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                excelencia académica
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Somos un centro médico universitario dedicado a la formación de profesionales de la salud 
              y a brindar atención médica de calidad a la comunidad.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button onClick={() => onNavigate('citas')} className="btn-primary">
                Agendar Cita
              </button>
              <button onClick={() => onNavigate('servicios')} className="btn-secondary">
                Nuestros Servicios
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-blue-600">25+</p>
                <p className="text-sm text-gray-500">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-teal-600">50+</p>
                <p className="text-sm text-gray-500">Especialidades</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">10K+</p>
                <p className="text-sm text-gray-500">Pacientes atendidos</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[500px]">
              {/* Main card */}
              <div className="absolute top-10 left-10 right-10 bottom-10 bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Atención Certificada</h3>
                      <p className="text-gray-500">Profesionales titulados</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Investigación</h3>
                      <p className="text-gray-500">Avances científicos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Docencia</h3>
                      <p className="text-gray-500">Formación continua</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                ✓ Acreditado
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                🏥 24/7 Emergencias
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
