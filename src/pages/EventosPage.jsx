import React from 'react';

const EventosPage = () => {
  // Como la imagen está en public/images, la ruta es directa
  const imagenHero = "/images/DIA DE CAMPO HOLÍSTICO (Post para Instagram (45)) (50).png";

  return (
    <div className="min-h-screen bg-white">
      
      {/* SECCIÓN HERO CON FOTO DE FONDO */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        
        {/* Contenedor de la Imagen */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imagenHero} 
            alt="Evento presencial de Carolina" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay para que el texto resalte (Esencia Terrenal) */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* CONTENIDO TEXTUAL */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          
          {/* Frase Hook */}
        <h1 className="text-4xl md:text-6xl font-carelia text-white leading-tight mb-6">
            El espacio de ciencia, consciencia y espiritualidad: <br />
            <span className="italic text-emerald-300">soltás bloqueos</span> y recuperás tu energía.
        </h1>

          {/* Info de duración */}
          <p className="text-white text-xl md:text-2xl font-light mb-10 tracking-wide">
            Eventos y retiros presenciales de <span className="font-semibold border-b border-emerald-400">8 horas</span>
          </p>

          {/* Botón de acción */}
          <a 
            href="#listado-eventos" 
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl"
          >
            Descubrir próximas fechas
          </a>
        </div>

        {/* Degradado para fundir con el blanco de la página */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Aquí seguiría el listado de eventos */}
      <section id="listado-eventos" className="py-20 px-4">
          {/* ... */}
      </section>
    </div>
  );
};

export default EventosPage;