// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importar Componentes
import Hero from './components/Hero';
import CatalogoCarousel from './components/CatalogoCarousel';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer'; 
import Navbar from './components/Navbar'; // <--- AGREGAMOS EL IMPORT DEL NAVBAR

// Importar Páginas
import ProductPage from './pages/ProductPage';
import ThankYou from "./pages/ThankYou";
import Remarketing from './pages/Remarketing';
import EventosPage from "./pages/EventosPage"; 
import MembresiaPage from "./pages/MembresiaPage"; // <--- 1. IMPORTAMOS LA MEMBRESÍA

// Importar Datos
import { ebooks } from './data/ebooks';

// Página de Inicio (Ebooks)
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
      <div className="min-h-screen flex flex-col"> 
        {/* Ubicamos el Navbar acá arriba, fuera de Routes, 
            para que se vea tanto en Ebooks, Eventos y Membresía 
        */}
        
        <Navbar /> {/* <--- 2. AGREGAMOS LA ETIQUETA PARA QUE SE VEA */}

        {/* Le sumamos pt-20 (padding-top) por si tu Navbar es fijo y tapa el contenido */}
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<EventosPage />} /> 
            <Route path="/membresia" element={<MembresiaPage />} /> {/* <--- 3. RUTA A MEMBRESÍA */}
            <Route path="/ebook/:id" element={<ProductPage />} />
            <Route path="/gracias/:id" element={<ThankYou />} />
            <Route path="/oferta/:id" element={<Remarketing />} />
          </Routes>
        </main>

        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;