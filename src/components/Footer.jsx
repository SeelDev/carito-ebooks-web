// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    // Usamos un verde oscuro (bg-green-900) para que contraste bien
    <footer className="bg-green-900 text-white py-4 text-center text-sm font-medium tracking-wide">
      <div className="container mx-auto px-4">
        <p>
          Diseño con <span className="text-red-400">♥</span> por{' '}
          <a 
            href="https://instagram.com/selenredes"  // <-- ¡Revisá que este sea tu link correcto!
            target="_blank" 
            rel="noopener noreferrer"
            // Efecto hover: se pone un poquito más claro al pasar el mouse
            className="font-bold text-green-100 hover:text-white hover:underline transition-all"
          >
            @selenredes
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;