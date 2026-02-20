 import React, { useState } from 'react';
{/*import { useNavigate } from 'react-router-dom'; // Aseguramos el import */}

// AGREGAMOS ebookId en las props aquí arriba
const ModalCompra = ({ isOpen, onClose, linkPago, tituloEbook }) => {
//   const navigate = useNavigate(); // DECLARAMOS el navigate aquí adentro
  
  const [formData, setFormData] = useState({
    Nombre: '',
    Email: '',
    Telefono: ''
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // La URL del Script la dejamos por si la usás después, pero ahora usás Formspree
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxnwNwloR2Ry8Jnb5K52Wlsu9Y_ERdM-Jx1uhmz0_L_sb0Df-EL6qVPB2pGTFwLoxEa0g/exec"; 

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validarFormulario = () => {
    let newErrors = {};
    if (!formData.Nombre.trim()) newErrors.Nombre = "¡Ups! Necesitamos tu nombre.";
    if (!formData.Email.trim()) {
      newErrors.Email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = "Email no válido.";
    }
    if (!formData.Telefono.trim()) newErrors.Telefono = "Dejanos un WhatsApp.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;
    setLoading(true);

    const data = {
      Nombre: formData.Nombre,
      Email: formData.Email,
      Telefono: formData.Telefono,
      Ebook: tituloEbook
    };

    try {
      // 1. Guardamos los datos en Formspree (o tu Excel)
      await fetch("https://formspree.io/f/xgolkknd", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      // 2. Mandamos directo al pago
      window.location.href = linkPago;
      
    } catch (error) {
      console.error("Fallo el envío:", error);
      // Si falla Formspree, lo mandamos igual para no perder la venta
      window.location.href = linkPago;
    }
  };
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-all">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in-up border-t-4 border-green-500">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold text-xl">✕</button>
        <h3 className="text-2xl font-serif text-green-900 font-bold mb-2">¡Casi es tuyo! ✨</h3>
        
        <div className="bg-green-50 p-4 rounded-xl border border-green-100 mb-6 text-sm text-green-800">
          <p className="font-semibold mb-1">🔒 Tu privacidad es sagrada</p>
          <p className="opacity-90 leading-relaxed">Solicitamos estos datos únicamente para asegurar la entrega de tu material.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Nombre completo</label>
            <input 
              type="text" name="Nombre" 
              className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 outline-none transition ${errors.Nombre ? 'border-red-500 focus:ring-red-200 bg-red-50' : 'border-gray-200 focus:ring-green-500 focus:bg-white'}`}
              placeholder="Tu nombre acá" onChange={handleChange}
            />
            {errors.Nombre && <p className="text-red-500 text-xs mt-1 ml-1 font-semibold">{errors.Nombre}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Email</label>
            <input 
              type="email" name="Email" 
              className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 outline-none transition ${errors.Email ? 'border-red-500 focus:ring-red-200 bg-red-50' : 'border-gray-200 focus:ring-green-500 focus:bg-white'}`}
              placeholder="tu@email.com" onChange={handleChange}
            />
            {errors.Email && <p className="text-red-500 text-xs mt-1 ml-1 font-semibold">{errors.Email}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Número</label>
            <input 
              type="tel" name="Telefono"
              className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 outline-none transition ${errors.Telefono ? 'border-red-500 focus:ring-red-200 bg-red-50' : 'border-gray-200 focus:ring-green-500 focus:bg-white'}`}
              placeholder="Ej: 11 1234 5678" onChange={handleChange}
            />
            {errors.Telefono && <p className="text-red-500 text-xs mt-1 ml-1 font-semibold">{errors.Telefono}</p>}
          </div>

          <button 
            type="submit" disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl mt-2 transform hover:-translate-y-1"
          >
            {loading ? "Procesando..." : "CONTINUAR AL PAGO →"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalCompra;