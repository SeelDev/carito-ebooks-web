import React from 'react';

const Inversion = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] flex justify-center items-center relative overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-xl w-full relative z-10">
        
        {/* NUEVA SECCIÓN DE FRASE POTENTE */}
        <div className="mb-16 text-center">
          <p className="text-gray-200 font-serif italic text-2xl md:text-3xl leading-snug mb-6">
            Lo que necesitás no es más información, necesitás presencia real mientras el cambio ocurre.
          </p>
          <p className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm md:text-base border-t border-amber-900/50 pt-6">
            ESO ES EXACTAMENTE LO QUE OFRECE ESTE ACOMPAÑAMIENTO
          </p>
        </div>

        {/* CAJA DORADA DINÁMICA */}
        <div className="caja-animada bg-[#111] border-2 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden flex flex-col items-center">
          
          <h2 className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm md:text-base mb-6">
            Inversión Consciente
          </h2>
          
          {/* Precio */}
          {/* Precio más chico: de text-7xl a text-4xl o 5xl */}
          <p className="texto-dorado font-serif text-4xl md:text-5xl font-bold mb-6">
            $57.000
          </p>
          
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-sm">
            Pago mensual y congelado durante cada proceso de manifestación
          </p>

          {/* BOTÓN CON DESTELLOS */}
          <a 
            href="https://wa.me/+5491165872587" 
            target="_blank" 
            rel="noopener noreferrer"
            className="boton-destello inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm md:text-base hover:scale-105 transition-transform"
          >
            {/* ÍCONO DE WHATSAPP */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.373 0 .001 5.373 0 12c0 2.116.552 4.186 1.6 6.02L0 24l6.2-1.6A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.6c-1.9 0-3.74-.5-5.34-1.44l-.38-.22-3.68.95.98-3.58-.25-.38A8.4 8.4 0 013.6 12c0-4.65 3.75-8.4 8.4-8.4 2.24 0 4.33.87 5.9 2.44A8.32 8.32 0 0120.4 12c0 4.65-3.75 8.4-8.4 8.4z" />
              <path d="M17.1 14.1c-.3-.15-1.7-.85-2-.95-.3-.1-.5-.15-.7.15s-.8.95-1 1.15c-.2.2-.4.25-.7.1-.3-.15-1.25-.46-2.38-1.48-.88-.78-1.48-1.74-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2 0-.35-.05-.5-.05-.15-.7-1.7-.95-2.33-.25-.6-.5-.52-.7-.53-.18-.02-.4-.02-.62-.02s-.5.08-.76.35c-.27.28-1.03 1-1.03 2.45s1.06 2.85 1.2 3.05c.15.2 2.07 3.35 5.02 4.7 2.95 1.35 2.95.9 3.48.85.53-.05 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.13-.25-.2-.55-.35z" />
            </svg>
            Comenzar mi proceso
          </a>

        </div>
      </div>
    </section>
  );
};

export default Inversion;