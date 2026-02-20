import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ebooks } from '../data/ebooks';

const Remarketing = () => {
  const { id } = useParams(); // Obtenemos qué libro eligió del carrusel
  const ebook = ebooks.find(e => e.id === id);

  if (!ebook) {
    return <div className="text-center py-20 text-green-900">Ebook no encontrado.</div>;
  }

  // Lógica del descuento
  const calcularPrecioDescuento = (precioString) => {
    const numeroLimpio = precioString.replace(/[^0-9]/g, ''); 
    const precioOriginal = parseInt(numeroLimpio);
    const precioConDescuento = precioOriginal * 0.80; 
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(precioConDescuento);
  };

  return (
    <div className="bg-emerald-50/20 min-h-screen pt-12 pb-20 font-sans">
      <div className="container mx-auto px-6">
        
        {/* Banner Superior VIP */}
        <div className="max-w-4xl mx-auto bg-emerald-600 rounded-2xl p-4 text-center mb-8 shadow-md animate-fade-in-down">
          <p className="text-white font-bold tracking-widest uppercase text-sm">
            ✨ Beneficio Exclusivo Activado: 20% de Descuento
          </p>
        </div>

        {/* Contenedor del Ebook */}
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-12 shadow-xl border border-emerald-100">
          
          {/* Columna Izquierda: Imagen */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={ebook.imagen} 
                alt={ebook.titulo} 
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white font-black px-4 py-2 rounded-xl shadow-lg transform rotate-3">
                -20% OFF
              </div>
            </div>
          </div>

          {/* Columna Derecha: Info y Pago */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
            <h1 className="text-3xl md:text-4xl font-serif text-green-950 mb-4 leading-tight">
              {ebook.titulo}
            </h1>
            
            <p className="text-gray-600 mb-8 italic">
              Continuá tu camino de sanación y descubrimiento con este material diseñado especialmente para tu evolución.
            </p>

            {/* Zona de Precios */}
            <div className="bg-emerald-50 rounded-2xl p-6 mb-8 border border-emerald-100">
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Precio Normal</p>
              <p className="text-gray-400 line-through decoration-red-400 decoration-2 text-lg mb-4">
                {ebook.precio}
              </p>
              
              <p className="text-emerald-800 text-sm font-black uppercase tracking-wider mb-1">Tu Precio Especial</p>
              <p className="text-5xl font-black text-emerald-600">
                {calcularPrecioDescuento(ebook.precio)}
              </p>
            </div>

            {/* OJO ACÁ: Usamos el linkPagoDescuento que agregues en tu data */}
            <a 
              href={ebook.linkPagoDescuento || ebook.linkPago} 
              className="w-full bg-emerald-600 text-white text-center font-bold text-lg py-4 rounded-2xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4 block"
            >
              COMPRAR AHORA CON DESCUENTO
            </a>
            
            <p className="text-xs text-center text-gray-400 flex items-center justify-center gap-2">
              🔒 Pago 100% seguro a través de Mercado Pago
            </p>
          </div>

        </div>

        {/* Botón Volver */}
        <div className="max-w-4xl mx-auto mt-8 flex justify-center">
          <Link to="/gracias" className="text-emerald-700 font-bold hover:underline flex items-center gap-2">
            ← Volver a mi página de agradecimiento
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Remarketing;