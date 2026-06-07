import React from 'react';

const HeroMembresia = () => {
  return (
    <section className="relative py-12 px-6 overflow-hidden bg-gradient-to-b from-[#fcfbf9] to-white">
      
      {/* Efecto de "brillo dorado" de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 bg-amber-200/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        
        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">
          {/* Parte dorada: "Manifestá reconociéndote" */}
          <span className="block italic font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-800">
            Manifestá reconociéndote
          </span>
          {/* Parte sutil: "durante 30 días" (Más chico y sin negrita) */}
{/* Parte sutil: "durante 30 días" (Ahora mucho más chico y fino) */}
<span className="block text-lg md:text-xl text-gray-500 font-light mt-4 tracking-widest uppercase">
  durante 30 días
</span>
        </h1>

        <div className="max-w-2xl mx-auto mt-8 mb-10 px-4">
  <div className="relative group">
    {/* Brillo de fondo (Glow effect) */}
    <div className="absolute -inset-1 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
    
    {/* El marco propiamente dicho */}
    <div className="relative bg-white/60 backdrop-blur-sm border border-amber-200/60 rounded-2xl p-6 md:p-8 shadow-sm">
      <p className="text-gray-600 text-lg md:text-xl font-serif italic leading-relaxed">
        Un acompañamiento diario y personalizado para recuperar{" "}
        <span className="text-amber-700 font-semibold">claridad, confianza y dirección</span>{" "}
        en tu vida.
      </p>
    </div>
  </div>
</div>
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
          Inicio mi transformación hoy
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
    </section>
  );
};

export default HeroMembresia;