import React from 'react';

const ComoLoHaremos = () => {
  const entregables = [
    {
      id: 1,
      titulo: "2 sesiones online individual para ir directo a lo que querés.",
      desc: "Cada 15 días, ajustado a tus horarios",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="5"></circle>
          <path d="M20 21a8 8 0 0 0-16 0"></path>
        </svg>
      )
    },
    {
      id: 2,
      titulo: "4 respiraciones matutinas grabadas",
      desc: "Una por semana sosteniendo la repetición",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      )
    },
    {
      id: 3,
      titulo: "Meditación de activación energética ",
      desc: "Y Kit de sostenimiento energético",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
        </svg>
      )
    },
    {
      id: 4,
      titulo: "Ebook de presencia y gratitud diaria",
      desc: "",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    {
      id: 6,
      titulo: "Asistencia de Coaching diario",
      desc: "Comunicación por WhatsApp",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        
        {/* Título de la sección */}
        <h2 className="text-3xl md:text-4xl text-gray-800 font-serif mb-10 text-center md:text-left">
          ¿Cómo lo hacemos?
        </h2>

        {/* Contenedor de las cajitas */}
        <div className="flex flex-col gap-4">
          {entregables.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center gap-5 p-5 bg-white border border-amber-300 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              
              {/* Ícono con Aura de Luz constante */}
              <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                
                {/* Brillo desenfocado constante de fondo */}
                <div className="absolute inset-0 bg-amber-200 rounded-full blur-md opacity-50"></div>
                
                {/* Círculo del ícono */}
                <div className="relative w-12 h-12 rounded-full border border-amber-300 flex items-center justify-center text-amber-600 bg-white z-10">
                  {item.icon}
                </div>
              </div>

              {/* Texto */}
              <div className="flex flex-col">
                <p className="text-[#1a202c] font-bold text-base md:text-lg">
                  {item.titulo}
                </p>
                {item.desc && (
                  <p className="text-gray-500 text-sm md:text-base mt-0.5">
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
    <div className="relative group">
  <a 
    href="https://wa.me/+5491165872587" 
    target="_blank" 
    rel="noopener noreferrer"
    className="relative inline-block p-px font-semibold leading-6 text-white cursor-pointer rounded-full shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
  >
    {/* Este span es el que crea el borde mágico dorado */}
    <span
      className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    ></span>

    {/* El cuerpo del botón */}
    <span className="relative z-10 block px-10 py-4 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-colors">
      <div className="relative z-10 flex items-center justify-center gap-3">
        <span className="font-bold uppercase tracking-[0.15em] text-sm text-amber-500">
          Comenzar mi proceso
        </span>
        {/* Opcional: El ícono de la flechita */}
        <svg
          className="w-5 h-5 text-amber-500 transition-transform duration-500 group-hover:translate-x-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            clipRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
    </span>
  </a>
</div>
        </div>
        
      </div>
    </section>
  );
};

export default ComoLoHaremos;