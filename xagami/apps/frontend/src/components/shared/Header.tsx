'use client'
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import MenuUser from './MenuUser';
import useSection from '@/data/hooks/useSection';

export default function Header() {
    const { user } = useSection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 mx-4 md:mx-8 bg-white/30 backdrop-blur-md shadow-lg rounded-xl">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        
        {/* Logo à esquerda */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Links centralizados */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6">
          <Link href="/login" className="text-black-700 hover:text-[#3664f4] transition">Serviços</Link>
          <Link href="/login" className="text-black-700 hover:text-[#3664f4] transition">Hotéis</Link>
          <Link href="/login" className="text-black-700 hover:text-[#3664f4] transition">Transportes</Link>
        </div>

        {/* Botão Entrar à direita */}
        <div className="flex-shrink-0 flex items-center gap-4">
          {user ? (
            <MenuUser />
          ) : (
            <Link
              href="/login"
              className="bg-[#3664f4] hover:bg-[#274fd3] text-white font-semibold px-5 py-2 rounded-full transition"
            >
              Entrar
            </Link>
          )}

          {/* Botão de menu mobile (hamburger) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#3664f4] focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile dropdown (exibido somente quando aberto) */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          <Link href="/login" className="text-black-700 hover:text-[#3664f4] transition">Serviços</Link>
          <Link href="/login" className="text-black-700 hover:text-[#3664f4] transition">Hotéis</Link>
          <Link href="/login" className="text-black-700 hover:text-[#3664f4] transition">Transportes</Link>
          {user ? (
            <MenuUser />
          ) : (
            <Link
              href="/login"
              className="bg-[#3664f4] hover:bg-[#274fd3] text-white font-semibold px-5 py-2 rounded-full transition"
            >
              Entrar
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
