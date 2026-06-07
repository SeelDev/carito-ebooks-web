import React from 'react';

const QueCambia = () => {
  const beneficios = [
    {
      id: 1,
      titulo: "Comprensión real",
      desc: "Entendés por qué hacías lo que hacías. Los patrones que se repiten tienen lógica. Cuando los ves, perdés el misterio y ganás elección.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"></path>
        </svg>
      )
    },
    {
      id: 2,
      titulo: "Aliada de tu cuerpo",
      desc: "El cuerpo deja de ser el enemigo. Aprendés a leer lo que te dice en vez de ignorarlo o pelearte con él. La tensión tiene un mensaje.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
        </svg>
      )
    },
    {
      id: 3,
      titulo: "Nuevas decisiones",
      desc: "Tomás decisiones desde un lugar diferente. No desde el miedo o lo que 'se espera' de vos. Desde lo que realmente querés y quién querés ser.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      )
    },
    {
      id: 4,
      titulo: "Lenguaje emocional",
      desc: "Tenés un lenguaje para lo que sentís. Lo que antes era confuso o abrumador empieza a tener nombre, contorno y manejo.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      id: 5,
      titulo: "Rompés el ciclo",
      desc: "Rompés el ciclo del arranque y recaída. Porque ahora sabés desde dónde trabajar. El cambio no depende de motivación, depende de comprensión.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          <path d="M3 3v5h5"></path>
        </svg>
      )
    },
    {
      id: 6,
      titulo: "Reconexión esencial",
      desc: "Recuperás algo tuyo que estaba enterrado. Salís del proceso recordando quién eras antes de adaptarte a todo. Volvés a tu esencia.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-[#111111] border-y border-amber-900/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Título - Blanco con detalles dorados */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-white font-serif mb-4">
            Después de un mes de <span className="texto-dorado font-bold">Descubrimiento</span>
          </h2>
          <p className="text-amber-500/80 uppercase tracking-[0.2em] text-sm font-bold">
            ¿Qué es lo que realmente cambia en tu vida?
          </p>
        </div>

        {/* Grilla de cajitas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {beneficios.map((item) => (
            <div 
              key={item.id} 
              className="group bg-[#1a1a1a] border border-amber-500/20 rounded-2xl p-8 hover:border-amber-400/50 hover:bg-[#222] transition-all duration-300"
            >
              {/* Ícono Dorado Oscuro */}
              <div className="w-12 h-12 rounded-xl bg-amber-900/20 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              {/* Textos - AHORA CON TU CLASE texto-dorado y más grandes */}
              <h3 className="text-2xl font-serif font-bold mb-3 texto-dorado block">
                {item.titulo}
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))} 
          
         <div className="relative group">
  <a 
    href="https://wa.me/+5491165872587" 
    target="_blank" 
    rel="noopener noreferrer"
    className="relative inline-block p-px font-semibold leading-6 text-amber-900 cursor-pointer rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
  >
    {/* Borde mágico NEGRO (aparece en hover) */}
    <span
      className="absolute inset-0 rounded-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-[2px]"
    ></span>

    {/* Fondo DORADO del botón */}
    <span className="relative z-10 block px-10 py-4 rounded-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 transition-colors">
      <div className="relative z-10 flex items-center justify-center gap-3">
        <span className="font-bold uppercase tracking-[0.10em] text-sm text-amber-950 transition-all duration-500 group-hover:translate-x-1">
          Doy el paso hacia mi descubrimiento
        </span>
        <svg
          className="w-5 h-5 text-amber-950 transition-transform duration-500 group-hover:translate-x-1"
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

export default QueCambia;