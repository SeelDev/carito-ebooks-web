import React from 'react';
import HeroMembresia from '../components/HeroMembresia'; // <--- IMPORTÁS EL SUBFILE
import GrillaDolores from '../components/GrillaDolores';
import LineaDeTiempo from '../components/LineaDeTiempo';
import ComoLoHaremos from '../components/ComoLoHaremos';
import QueCambia from '../components/QueCambia';
import Inversion from '../components/Inversion';
import AboutMembresia from '../components/AboutMembresia';

const MembresiaPage = () => {
  return (
    <main className="bg-white min-h-screen font-sans">
      
    

      {/* 1. SECCIÓN HERO */}
      <HeroMembresia />
      <GrillaDolores />
      <LineaDeTiempo />
      <ComoLoHaremos />
      <QueCambia />
      <Inversion />
      <AboutMembresia />
    </main>
  );
};

export default MembresiaPage;