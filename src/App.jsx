// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importar Componentes
import Hero from './components/Hero';
import CatalogoCarousel from './components/CatalogoCarousel';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer'; // <--- 1. IMPORTAMOS EL FOOTER
import Remarketing from './pages/Remarketing';
// Importar Páginas
import ProductPage from './pages/ProductPage';
import ThankYou from "./pages/ThankYou";
import Membresia from './pages/Membresia';


// Importar Datos
import { ebooks } from './data/ebooks';

// Página de Inicio
const Home = () => (
  <>
    <Hero />
    <CatalogoCarousel listaLibros={ebooks} tituloSeccion="Nuestra Colección" />
    <FAQ />
    <About />
  </>
);

function App() {
  return (
    <BrowserRouter>
      {/* El contenido principal cambia según la ruta */}
      <div className="min-h-screen"> {/* Esto ayuda a empujar el footer abajo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ebook/:id" element={<ProductPage />} />
          <Route path="/gracias/:id" element={<ThankYou />} />
          <Route path="/oferta/:id" element={<Remarketing />} />
          <Route path="/membresia" element={<Membresia />} />
        </Routes>
      </div>

      {/* El Footer va ACÁ, afuera de Routes, para que se vea siempre al final */}
      <Footer /> 
      
    </BrowserRouter>
  );
}

export default App;