import React from 'react';

const LineaDeTiempo = () => {
  const semanas = [
    {
      id: "01",
      semana: "SEMANA 1",
      titulo: "ROMPER EL CAMPO ANTIGUO",
      desc: "Disolvés los patrones que llevan años creando la realidad que no querés. Tu cuerpo comienza a liberar la señal del pasado para abrir espacio a una nueva frecuencia.",
      principio: "Ley de la Frecuencia",
      img : "images/IconosMembresia/seman1.png"
    },
    {
      id: "02",
      semana: "SEMANA 2",
      titulo: "PROGRAMÁ TU CUERPO",
      desc: "Tu sistema nervioso aprende a sincronizarse con la realidad que querés experimentar. Dejás de intentar cambiar tu vida desde la mente y comenzás a reprogramarla desde el cuerpo.",
      principio: "Ley de la Vibración",
      img: "images/IconosMembresia/sem2.png"
    },
    {
      id: "03",
      semana: "SEMANA 3",
      titulo: "PRESENCIA CONSCIENTE",
      desc: "Tu biología entra en coherencia con tu nueva señal. Comienzan a aparecer evidencias concretas que validan el cambio interno.",
      principio: "Principio del Observador",
      img: "images/IconosMembresia/sem3.png"
    },
    {
      id: "04",
      semana: "SEMANA 4",
      titulo: "CONECTÁ CON TU NUEVA IDENTIDAD",
      desc: "La manifestación deja de ser un evento aislado. Ahora forma parte de tu identidad y de la forma en que pensás, decidís y actúas.",
      principio: "Ley de Correspondencia",
      img: "images/IconosMembresia/sem4.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#fcfbf9]">
      <div className="max-w-4xl mx-auto">
        
        {/* Título de la sección (también más chico en celu) */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lg md:text-3xl text-gray-800 font-serif leading-relaxed">
            Cada semana tu mente consciente e inconsciente {" "}
            <br className="hidden md:block" />
            avanzan hacia la{" "}
            <span className="font-bold texto-dorado">identidad que sostiene</span>{" "}
            <br className="hidden md:block" />
            lo que elegiste.
          </p>
        </div>

        {/* Contenedor de la línea de tiempo */}
        <div className="relative">
          
          {/* Línea vertical dorada - Ajustada para celular */}
          <div className="absolute top-4 bottom-4 left-5 md:left-8 w-1 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-100 rounded-full"></div>

          <div className="flex flex-col gap-8 md:gap-12">
            {semanas.map((item) => (
              <div key={item.id} className="relative flex gap-3 md:gap-10 items-start">
                
                {/* Círculo con el número - Más chico en celu (w-10 h-10) */}
                <div className="w-10 h-10 md:w-16 md:h-16 shrink-0 rounded-full bg-white border-2 border-amber-300 flex items-center justify-center shadow-lg relative z-10">
                  <span className="texto-dorado font-bold text-sm md:text-2xl">{item.id}</span>
                </div>

                {/* Tarjeta de contenido - AHORA SIEMPRE EN FILA (flex-row) */}
                <div className="flex-1 bg-white border border-amber-100 rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-row items-start gap-4 md:gap-8 shadow-sm hover:shadow-xl transition-shadow">
                  
                  {/* Imagen de la esfera - Tamaño reducido a la mitad en celular (w-20 h-20) */}
                  <div className="w-20 h-20 md:w-40 md:h-40 shrink-0 relative flex items-center justify-center mt-2 md:mt-0">
                    <div className="absolute inset-0 bg-amber-50 rounded-full blur-xl opacity-50"></div>
                    <img 
                      src={item.img} 
                      alt={`Esfera ${item.semana}`} 
                      className="relative z-10 w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>

                  {/* Textos de la tarjeta - Tamaños adaptados */}
                  <div className="flex-1 text-left">
                    <span className="text-amber-600 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                      {item.semana}
                    </span>
                    
                    {/* Título más chico (text-lg en celular) */}
                    <h3 className="text-lg md:text-3xl font-serif text-gray-800 font-bold mb-2 mt-1 leading-tight">
                      {item.titulo}
                    </h3>
                    
                    {/* Descripción más chica (text-sm en celular) */}
                    <p className="text-gray-600 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    {/* Detalle del Principio Aplicado */}
                    <div className="flex items-center justify-start gap-2 text-amber-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-6 md:h-6 text-amber-500">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <div>
                        <p className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-amber-600/80">Principio Aplicado</p>
                        <p className="font-serif text-gray-800 text-xs md:text-lg font-bold">{item.principio}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LineaDeTiempo;