// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; // Importamos los estilos del botón

const Hero = () => {
  return (
    <div className="relative bg-white min-h-screen flex flex-col items-center">
      
      {/* 1. NAVBAR / MENÚ SUPERIOR */}
      <nav className="w-full py-6 px-8 flex justify-center border-b border-green-50 bg-white/80 backdrop-blur-sm fixed top-0 z-50">
        <ul className="flex gap-8 md:gap-12 text-gray-600 font-medium text-sm md:text-base tracking-wide">
          <li><Link to="/" className="hover:text-green-600 transition">Descubrimiento del ser</Link></li>
          <li><a href="#catalogo" className="hover:text-green-600 transition">Ebooks</a></li>
          <li><Link to="/membresia" className="hover:text-green-600 transition"></Link></li>
          <li><Link to="/eventos" className="hover:text-green-600 transition"></Link></li>
        </ul>
      </nav>

      {/* 2. CONTENIDO PRINCIPAL (Con margen arriba para que no lo tape el menú) */}
      <section className="relative w-full flex flex-col items-center pt-32 pb-12 px-4 overflow-hidden text-center">
        
        {/* Aura Verde de Fondo */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse pointer-events-none"></div>

        {/* TÍTULO */}
        <div className="relative z-10 max-w-4xl mx-auto mb-6">
          <h1 className="text-5xl md:text-7xl font-serif text-gray-800 leading-[1.1]">
            Integrá el arte de la <br />
            <span className="italic text-emerald-600 font-medium">Gratitud consciente</span> <br />
            y multiplicá tu <span className="italic text-gray-900">bienestar.</span>
          </h1>
        </div>

        {/* TAGLINE (Texto simple) */}
        <p className="relative z-10 text-gray-500 text-lg mb-10 tracking-wide">
          Transformá tu día en 10 minutos
        </p>

        {/* 3. BOTÓN DE FLORES (HTML structure for CSS) */}
        <div className="relative z-10 mb-16">
          <a href="#catalogo"> {/* El enlace lleva al catálogo */}
            <button className="btn-flower">
              <div className="wrapper">
                
                {/* Las 6 flores animadas */}
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className={`flower flower${num} flower-wrapper`}>
                    <div className="petal one"></div>
                    <div className="petal two"></div>
                    <div className="petal three"></div>
                    <div className="petal four"></div>
                  </div>
                ))}
                
                {/* Texto del botón */}
                <div className="text-flower">Ver colección</div>
              </div>
            </button>
          </a>
        </div>

        {/* 4. CAJA DE TEXTO (Borde Verde) */}
        <div className="relative z-10 max-w-3xl mx-auto border border-emerald-600 rounded-2xl p-6 md:p-8 bg-white/50 backdrop-blur-sm shadow-sm">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Accedé a un <strong>proceso de transformación</strong> profunda a través de estas guías de 21 días que te acompañarán a desactivar las <em className="text-emerald-700">creencias limitantes</em> que te frenan, potenciar tu comunicación asertiva y vivir en <em>gratitud consciente</em>. <strong>Programá tu mente</strong> para el éxito y la paz interior.
          </p>
        </div>

      </section>
    </div>
  );
};

export default Hero;