const doctors = [
  {
    name: 'Dra. María González',
    specialty: 'Cardiología',
    education: 'PhD en Cardiología - Universidad Complutense',
    experience: '15 años de experiencia',
    avatar: '👩‍⚕️',
    color: 'from-red-400 to-pink-500',
  },
  {
    name: 'Dr. Carlos Rodríguez',
    specialty: 'Neurología',
    education: 'MSc en Neurociencias - Universidad de Barcelona',
    experience: '12 años de experiencia',
    avatar: '👨‍⚕️',
    color: 'from-purple-400 to-indigo-500',
  },
  {
    name: 'Dra. Ana Martínez',
    specialty: 'Pediatría',
    education: 'Especialidad en Pediatría - UNAM',
    experience: '10 años de experiencia',
    avatar: '👩‍⚕️',
    color: 'from-green-400 to-emerald-500',
  },
  {
    name: 'Dr. Roberto Sánchez',
    specialty: 'Oftalmología',
    education: 'Fellowship en Cirugía Refractiva - Johns Hopkins',
    experience: '18 años de experiencia',
    avatar: '👨‍⚕️',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    name: 'Dra. Laura Fernández',
    specialty: 'Medicina Interna',
    education: 'PhD en Inmunología - Universidad de Salamanca',
    experience: '14 años de experiencia',
    avatar: '👩‍⚕️',
    color: 'from-orange-400 to-amber-500',
  },
  {
    name: 'Dr. Miguel Torres',
    specialty: 'Traumatología',
    education: 'Especialidad en Cirugía Ortopédica - Hospital Clínic',
    experience: '11 años de experiencia',
    avatar: '👨‍⚕️',
    color: 'from-teal-400 to-green-500',
  },
];

export default function Doctors() {
  return (
    <section id="doctores" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nuestro Equipo</span>
          <h2 className="section-title mt-2">Profesionales de Excelencia</h2>
          <p className="section-subtitle">
            Nuestro equipo está conformado por médicos especialistas con amplia formación 
            académica y experiencia clínica.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="card group text-center hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${doctor.color} flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {doctor.avatar}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
              <p className="text-blue-600 font-medium mt-1">{doctor.specialty}</p>
              
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {doctor.education}
                </p>
                <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {doctor.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
