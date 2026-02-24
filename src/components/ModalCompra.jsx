import React, { useState } from 'react';

const ModalCompra = ({ ebook, isOpen, onClose, isRemarketing = false }) => {
  const [nombre, setNombre] = useState('');
  const [errorNombre, setErrorNombre] = useState(false);

  if (!isOpen || !ebook || !ebook.precio) return null;

  const precioNumerico = parseInt(ebook.precio.replace(/[^0-9]/g, ''));
  const precioConDescuento = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(precioNumerico * 0.5); 

  const handleWhatsApp = () => {
    if (!nombre.trim()) {
      setErrorNombre(true);
      return;
    }

    const nombreEncoded = encodeURIComponent(nombre.trim());
    const baseLink = isRemarketing ? ebook.waLinkRemarketing : ebook.waLink;
    
    if (baseLink && baseLink.includes('text=')) {
      const [url, mensaje] = baseLink.split('text=');
      const nuevoMensaje = `Hola!%20Soy%20${nombreEncoded}.%20${mensaje}`;
      window.open(`${url}text=${nuevoMensaje}`, '_blank');
    } else {
      window.open(baseLink || "https://wa.me/5491125461422", '_blank');
    }

    onClose();
    setNombre(''); 
    setErrorNombre(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl border-t-8 border-pink-300 relative">
        
        {/* Header del Modal */}
        <div className="flex justify-between items-start mb-6">
          <div className="pr-4">
            <h2 className="text-2xl font-bold text-gray-800">¡Excelente elección!</h2>
            <p className="text-pink-500 font-medium text-sm mt-1 uppercase tracking-wider">Paso final para tu transformación</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl transition-colors">&times;</button>
        </div>

        {/* Mensaje de Nombre */}
        <div className="bg-pink-50 p-4 rounded-xl mb-6">
          <p className="text-gray-700 text-center italic">
            "¿Cómo te llamás? Queremos que tu experiencia con <strong>{ebook.titulo}</strong> sea única."
          </p>
        </div>

        {/* Input */}
        <div className="mb-8">
          <label className="block text-gray-500 text-sm mb-2 ml-1 font-medium">Ingresá tu nombre:</label>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              if (errorNombre) setErrorNombre(false);
            }}
            className={`w-full p-4 border-2 rounded-xl outline-none transition-all text-lg shadow-sm ${
              errorNombre ? 'border-red-400 bg-red-50' : 'border-pink-100 focus:border-pink-400'
            }`}
            autoFocus
          />
          
          {errorNombre && (
            <p className="text-red-500 text-xs mt-2 ml-1 font-bold animate-pulse flex items-center gap-1">
              <span>🙌</span> Completá con tu nombre para continuar
            </p>
          )}
        </div>

        {/* BOTÓN VERDE CORREGIDO (Sin errores de etiquetas) */}
        <button
          onClick={handleWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 rounded-2xl shadow-xl transition-all active:scale-95 flex flex-col items-center group"
        >
          <span className="text-xl text-center uppercase tracking-tight">Comprar por WhatsApp</span>
          <span className="text-sm font-normal opacity-90 mt-1">
            Precio con 50% OFF ¡HOY!: <strong className="text-white">{precioConDescuento}</strong>
          </span>
        </button>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-center space-x-2 text-gray-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span className="text-xs uppercase tracking-widest font-semibold text-center">Pago seguro por transferencia</span>
        </div>
      </div>
    </div>
  );
};

export default ModalCompra;