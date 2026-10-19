const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Cardiología',
    description: 'Diagnóstico y tratamiento de enfermedades cardiovasculares con tecnología de punta.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Neurología',
    description: 'Atención especializada en trastornos del sistema nervioso central y periférico.',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Oftalmología',
    description: 'Cuidado integral de la salud visual con equipos de última generación.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Pediatría',
    description: 'Atención médica especializada para bebés, niños y adolescentes.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Laboratorio Clínico',
    description: 'Análisis clínicos con resultados precisos y oportunos para un diagnóstico certero.',
    color: 'from-teal-500 to-green-500',
    bgColor: 'bg-teal-50',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Medicina General',
    description: 'Consulta médica integral, chequeos preventivos y seguimiento de salud.',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="section-title mt-2">Especialidades Médicas</h2>
          <p className="section-subtitle">
            Contamos con un equipo multidisciplinario de profesionales altamente calificados 
            para atender todas tus necesidades de salud.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:-translate-y-2 cursor-pointer"
            >
              <div className={`${service.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                  <div className="text-gray-700">{service.icon}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-4 flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                <span>Más información</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
