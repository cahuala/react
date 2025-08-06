/* eslint-disable @next/next/no-img-element */
'use client'

import Logo from '../shared/Logo'
import useFormAuth from '@/data/hooks/useFormAuthPartner'
import InputPassword from '../shared/form/InputPassword'
import InputText from '../shared/form/InputText'
import InputTelefone from '../shared/form/InputTelefone'
import InputEmail from '../shared/form/InputEmail'
import Footer from '../shared/Footer'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

// Ícones
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa'

export default function FormAuth() {
  const {
    name, email, password,
    mode, telefone,
    alterName,
    alterEmail,
    alterPassword,
    alterTelefone,
    alterMode, submeter
  } = useFormAuth()

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)]">
        {/* Carrossel com texto no fim */}
        <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            className="w-full h-full"
          >
            {[1, 2, 3].map((i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                  <img
                    src={`/profissionais/profissional-${i}.jpg`}
                    alt={`Slide ${i}`}
                    className="w-full h-full object-cover lg:rounded-r-3xl"
                  />
              <div className="absolute bottom-0 w-full bg-black/60 px-6 py-8">
                <p className="text-white text-lg md:text-3xl font-light  leading-relaxed">
                  A nossa plataforma oferece uma experiência de reservas de hotéis segura, rápida e confiável.
                  Conectamos pessoas e destinos com soluções modernas de mobilidade e hospedagem.
                  Mais de <span className="font-semibold text-yellow-400">10.000 viajantes</span> já confiam nos nossos serviços todos os dias.
                </p>
              </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Formulário */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 py-10 gap-6">
          <Logo color="#000" name="Xagami" />

          <h1 className="text-2xl font-light text-gray-800">
            {mode === 'login' ? 'Seja bem-vindo' : 'Cadastre-se'}
          </h1>

          <div className="flex flex-col gap-4 w-full max-w-md">
            {mode === 'cadastro' && (
              <InputText placeholder="Nome" value={name} onChangeText={alterName} />
            )}
            <InputEmail placeholder="E-mail" value={email} onChangeText={alterEmail} />
            <InputPassword placeholder="Senha" value={password} onChangeText={alterPassword} />
            {mode === 'cadastro' && (
              <InputTelefone placeholder="Telefone" value={telefone} onChangeText={alterTelefone} />
            )}

            <div className="flex gap-2">
              <button
                onClick={submeter}
                className="flex-1 bg-[#3664f4] hover:bg-[#274fd3] text-white font-medium py-2 px-4 rounded"
              >
                {mode === 'cadastro' ? 'Cadastrar' : 'Entrar'}
              </button>
            </div>

            {/* Redes sociais */}
            <div className="mt-4 flex flex-col gap-3">
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-100 transition text-sm text-gray-700">
                <FaGoogle className="w-5 h-5 text-red-500" />
                Entrar com Google
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-100 transition text-sm text-gray-700">
                <FaGithub className="w-5 h-5 text-gray-800" />
                Entrar com GitHub
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-100 transition text-sm text-gray-700">
                <FaFacebook className="w-5 h-5 text-blue-600" />
                Entrar com Facebook
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-100 transition text-sm text-gray-700">
                <FaInstagram className="w-5 h-5 text-pink-600" />
                Entrar com Instagram
              </button>
            </div>

            {/* Alternar modo */}
            <div className="mt-4 text-center">
              <button className="text-sm text-gray-600" onClick={alterMode}>
                {mode === 'login' ? (
                  <div>
                    Ainda não tem conta?{' '}
                    <span className="text-yellow-500 font-semibold">Cadastre-se</span>
                  </div>
                ) : (
                  <div>
                    Já tem conta?{' '}
                    <span className="text-yellow-500 font-semibold">Entre na Plataforma!</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
