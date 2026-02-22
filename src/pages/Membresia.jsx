import React from 'react';

const Membresia = () => {
  return (
    <div className="min-h-screen bg-[#F8FAF9] flex flex-col items-center justify-start pt-16 md:justify-center md:pt-0 px-6 relative overflow-hidden">
      
      {/* Animación de "Respiración" para las Auras */}
      <style>
        {`
          @keyframes floatAura {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
            50% { transform: translate(20px, -20px) scale(1.1); opacity: 0.5; }
          }
          .animate-aura {
            animation: floatAura 10s ease-in-out infinite;
          }
        `}
      </style>

      {/* ========================================= */}
      {/* === AURAS DELICADAS (FONDO) === */}
      {/* ========================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Aura Verde */}
        <div className="absolute top-[20%] left-[10%] w-72 h-72 md:w-[500px] md:h-[500px] bg-green-200/40 rounded-full blur-[80px] md:blur-[120px] animate-aura"></div>
        {/* Aura Rosa */}
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 md:w-[600px] md:h-[600px] bg-pink-100/50 rounded-full blur-[80px] md:blur-[130px] animate-aura" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* ========================================= */}
      {/* === CONTENIDO PRINCIPAL === */}
      {/* ========================================= */}
      <div className="max-w-4xl w-full text-center space-y-6 md:space-y-8 relative z-10">
        
        {/* Etiqueta superior del PDF [cite: 1] */}
        <span className="inline-block bg-white/70 backdrop-blur-sm text-pink-700 text-[10px] md:text-xs font-bold px-5 py-2 rounded-full tracking-[3px] uppercase mb-2 shadow-sm border border-pink-50">
          Un mes de acompañamiento personalizado [cite: 1]
        </span>

        {/* Título en Cursiva y Fino */}
        <h1 className="text-5xl md:text-8xl font-serif italic text-green-950 leading-[1.1] tracking-tight">
          Descubrimiento <br className="hidden md:block" /> del Ser 
        </h1>

        {/* FRASE DE ACCIÓN (Basada en tu PDF ) */}
        <div className="bg-white/30 backdrop-blur-sm p-4 md:p-6 rounded-3xl border border-white/50 max-w-2xl mx-auto shadow-sm">
          <p className="text-lg md:text-2xl text-green-900 font-serif italic leading-relaxed">
            "Un mes de acompañamiento ajustado a tus necesidades para transitar e integrar un aprendizaje nuevo cada día." 
          </p>
        </div>

        {/* Descripción corta incluyendo todos los ebooks [cite: 4, 7] */}
        <p className="text-sm md:text-lg text-green-900/70 font-light max-w-xl mx-auto leading-relaxed px-4">
          Utilizamos técnicas de bienestar holístico  y la sabiduría de todos nuestros ebooks para conectar con tu paz interior.
        </p>

        {/* Botón de suscripción [cite: 5] */}
        <div className="pt-6 md:pt-10">
          <button className="bg-pink-400 hover:bg-pink-500 text-white font-serif text-lg md:text-xl px-12 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-pink-600 active:border-b-0 active:translate-y-1">
            Suscribite a la Membresía [cite: 5]
          </button>
        </div>

      </div>
    </div>
  );
};

export default Membresia;