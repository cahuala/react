'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import MenuUser from './MenuUser'
import useSection from '@/data/hooks/useSection'

export default function Header() {
  const { user } = useSection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="fixed top-6 left-0 right-0 z-50 mx-4 md:mx-8 bg-white/30 backdrop-blur-md shadow-lg rounded-xl">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo color="white" name="Xagami" />
        </div>
 
        {/* Links do meio */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6">
          <Link href="/login" className="text-black hover:text-[#3664f4] transition">Serviços</Link>
          <Link href="/login" className="text-black hover:text-[#3664f4] transition">Hotéis</Link>
          <Link href="/login" className="text-black hover:text-[#3664f4] transition">Transportes</Link>
          <Link href="/login" className="text-black hover:text-[#3664f4] transition">Contactos</Link>
        </div>

        {/* Área Entrar/Registar */}
        <div className="flex-shrink-0 flex items-center gap-4 relative">
          {user ? (
            <MenuUser />
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-[#3664f4] text-white font-semibold px-5 py-2 rounded-full transition hidden md:inline-flex"
              >
                Entrar/Registar
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="flex flex-col p-3 text-sm text-gray-700">
                    <Link href="/login">
                      <span className="block px-4 py-2 bg-[#3664f4] text-white text-center rounded hover:bg-[#274fd3]">
                        Entrar
                      </span>
                    </Link>
                    <Link href="/register">
                      <span className="block px-4 py-2 mt-2 border border-[#3664f4] text-[#3664f4] text-center rounded hover:bg-blue-50">
                        Registar
                      </span>
                    </Link>
                    <hr className="my-3" />
                    <Link href="/loginhotels">
                      <span className="block px-4 py-2 hover:bg-gray-100 rounded">Login Hotel</span>
                    </Link>
                    <Link href="/loginLogitic">
                      <span className="block px-4 py-2 hover:bg-gray-100 rounded">Login Transporte</span>
                    </Link>
                    <Link href="/devolucao">
                      <span className="block px-4 py-2 hover:bg-gray-100 rounded">Devolução e Reembolso</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Botão menu mobile */}
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

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          <Link href="/login" className="text-black hover:text-[#3664f4] transition">Serviços</Link>
          <Link href="/login" className="text-black hover:text-[#3664f4] transition">Hotéis</Link>
          <Link href="/login" className="text-black hover:text-[#3664f4] transition">Transportes</Link>
          <Link href="/login" className="text-black hover:text-[#3664f4] transition">Contactos</Link>
          {user ? (
            <MenuUser />
          ) : (
            <>
              <Link href="/login" className="bg-[#3664f4] text-white font-semibold px-5 py-2 rounded-full transition">
                Entrar
              </Link>
              <Link href="/register" className="border border-[#3664f4] text-[#3664f4] font-semibold px-5 py-2 rounded-full transition">
                Registar
              </Link>
              <Link href="/hotel/login" className="text-sm text-gray-700 hover:text-[#3664f4]">Login Hotel</Link>
              <Link href="/transporte/login" className="text-sm text-gray-700 hover:text-[#3664f4]">Login Transporte</Link>
              <Link href="/devolucao" className="text-sm text-gray-700 hover:text-[#3664f4]">Devolução e Reembolso</Link>
            </>
          )}
        </div>
      )}
    </header>
  )
}
