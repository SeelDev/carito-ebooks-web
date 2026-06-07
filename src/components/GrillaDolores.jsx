import React from 'react';

const GrillaDolores = () => {
  // Lista de dolores con sus respectivos íconos en formato SVG
  const dolores = [
    {
      id: 1,
      titulo: "Sin avances reales",
      desc: "Tu vida es igual pese a tu trabajo personal.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      )
    },
    {
      id: 2,
      titulo: "Bloqueos internos",
      desc: "Sabés lo que querés, pero el inconsciente te frena.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      id: 3,
      titulo: "No sos constante",
      desc: "Sabés que hacer pero no lográs avanzar.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"></path>
        </svg>
      )
    },
    {
      id: 4,
      titulo: "Teoría/Acción",
      desc: "Buscás herramientas pero no las aplicás.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 4.1 12 6"></path><path d="M5.1 8l-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path>
        </svg>
      )
    },
    {
      id: 5,
      titulo: "Autosabotaje mental",
      desc: "Tus emociones como la vergüenza, la culpa, el miedo y la ira, frenan tus resultados.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
        </svg>
      )
    }
  ];

  return (
    <section className=" px-6 bg-white">
      <div className="max-w-2xl mx-auto"> {/* max-w-2xl hace que la lista no se estire demasiado y quede elegante */}
        
        {/* Título Principal */}
        <h2 className="text-2xl md:text-3xl text-gray-800 text-center mb-12 font-serif leading-relaxed">
          Este proceso de coaching es para un <span className=" texto-dorado font-bold">tipo de persona</span> muy específica que se observa en:
        </h2>

        {/* Contenedor de la lista vertical */}
        <div className="flex flex-col gap-6">
          {dolores.map((dolor) => (
            <div 
              key={dolor.id} 
              className="flex items-center gap-6 p-6 bg-[#fcfbf9] border border-amber-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Cajita del ícono dorado */}
              <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-amber-50 rounded-2xl text-amber-600 border border-amber-200/50">
                {dolor.icon}
              </div>
              
              {/* Textos */}
              {/* Textos */}
              <div className="text-left">
                {/* Título más grande: text-2xl */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{dolor.titulo}</h3>
                
                {/* Descripción más grande y clara: text-lg */}
                <p className="text-gray-600 text-lg leading-relaxed">{dolor.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GrillaDolores;