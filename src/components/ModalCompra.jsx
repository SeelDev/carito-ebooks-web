import React, { useState } from 'react';

const ModalCompra = ({ ebook, isOpen, onClose, isRemarketing = false }) => {
  const [nombre, setNombre] = useState('');

  // 1. Log para ver qué está pasando (lo verás en la consola F12)
  console.log("Ebook recibido en el Modal:", ebook);

  // 2. LA VALLA DE SEGURIDAD DEFINITIVA
  // Si el modal está cerrado o el ebook no tiene los datos necesarios, no mostramos NADA.
  // Esto evita que la pantalla se ponga en blanco.
  if (!isOpen || !ebook || !ebook.precio) return null;

  // 3. CÁLCULOS SEGUROS
  // Usamos un try/catch o validaciones simples para el precio
  let precioConDescuento = "$ 0";
  try {
    const precioNumerico = parseInt(ebook.precio.replace(/[^0-9]/g, ''));
    precioConDescuento = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    }).format(precioNumerico * 0.9);
  } catch (error) {
    console.error("Error al calcular el precio:", error);
  }

  const handleWhatsApp = () => {
    if (!nombre.trim()) {
      alert("Por favor, ingresá tu nombre ✨");
      return;
    }

    const nombreEncoded = encodeURIComponent(nombre.trim());
    const baseLink = isRemarketing ? ebook.waLinkRemarketing : ebook.waLink;
    
    // Verificamos que el link exista antes de intentar romperlo con split
    if (baseLink && baseLink.includes('text=')) {
      const [url, mensaje] = baseLink.split('text=');
      const nuevoMensaje = `Hola!%20Soy%20${nombreEncoded}.%20${mensaje}`;
      window.open(`${url}text=${nuevoMensaje}`, '_blank');
    } else {
      window.open(baseLink || "https://wa.me/5491125461422", '_blank');
    }

    onClose();
    setNombre(''); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl border-t-8 border-pink-300">
        
        <div className="flex justify-between items-start mb-6">
          <div className="pr-4">
            <h2 className="text-2xl font-bold text-gray-800">¡Excelente elección!</h2>
            <p className="text-pink-500 font-medium text-sm mt-1 uppercase tracking-wider">Paso final</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl">&times;</button>
        </div>

        <div className="bg-pink-50 p-4 rounded-xl mb-6">
          <p className="text-gray-700 text-center italic">
            "¿Cómo te llamás? Queremos que tu experiencia con <strong>{ebook.titulo}</strong> sea única."
          </p>
        </div>

        <div className="mb-8">
          <label className="block text-gray-500 text-sm mb-2 ml-1">Ingresá tu nombre:</label>
          <input
            type="text"
            placeholder="Ej: Selene..."
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-4 border-2 border-pink-100 rounded-xl focus:border-pink-400 outline-none transition-all text-lg shadow-sm"
            autoFocus
          />
        </div>

        <button
          onClick={handleWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 rounded-2xl shadow-xl transition-all active:scale-95 flex flex-col items-center"
        >
          <span className="text-xl">Comprar por WhatsApp</span>
          <span className="text-sm font-normal opacity-90 mt-1">
            Precio con 10% OFF: <strong className="text-white">{precioConDescuento}</strong>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ModalCompra;