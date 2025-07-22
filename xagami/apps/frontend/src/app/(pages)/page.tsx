'use client'

import NossosHotels from "@/components/hotel/NossosHoteis";
import NossosServices from "@/components/services/NossosServices";
import SessionBackground from '../../components/shared/SessionBackground';
import Footer from "@/components/shared/Footer";

import Slogan from "@/components/landing/Slogan";

import Dashboard from "@/components/cards/OursCards";
import NossosLogistica from "@/components/logistica/NossosFrotas";


export default function Landing() {
 
  return (
    <div className="flex flex-col">
      <Slogan/>
      <SessionBackground>
        <Dashboard/>
      </SessionBackground>
      <SessionBackground >
        <NossosServices />
      </SessionBackground>
      <SessionBackground >
        <NossosHotels/>
      </SessionBackground>
      <SessionBackground >
        <NossosLogistica/>
      </SessionBackground>
      <Footer />
    </div>
  );
}
