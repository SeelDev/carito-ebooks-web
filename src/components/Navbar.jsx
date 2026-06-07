import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  
  // Clases para los links
  const getLinkClass = (path) => 
    `transition-all duration-300 uppercase tracking-[0.2em] text-sm font-medium ${
      isActive(path) 
        ? 'text-amber-600 font-bold' 
        : 'text-amber-950 hover:text-amber-600'
    }`;

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        
        {/* TÍTULO DE LA MARCA */}
        <Link to="/" className="font-serif text-2xl text-amber-950 italic font-bold">
          Descubrimiento del ser
        </Link>

        {/* BOTÓN HAMBURGUESA (Solo celular) */}
        <button 
          className="md:hidden text-amber-950"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* LINKS (Desktop y Mobile) */}
        <div className={`
          absolute md:static top-full left-0 w-full bg-white/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-8 md:p-0 
          flex flex-col md:flex-row gap-8 items-center transition-all duration-300
          ${isOpen ? 'flex shadow-2xl md:shadow-none' : 'hidden md:flex'}
        `}>
          <Link to="/" onClick={() => setIsOpen(false)} className={getLinkClass('/')}>Ebooks</Link>
          <Link to="/eventos" onClick={() => setIsOpen(false)} className={getLinkClass('/eventos')}>Eventos</Link>
          <Link to="/membresia" onClick={() => setIsOpen(false)} className={getLinkClass('/membresia')}>Membresía</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;