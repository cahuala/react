'use client'

import { useState } from 'react'
import { Bell, PackageSearch, MessageSquareText, Truck, User, LogOut } from 'lucide-react'
import Image from 'next/image'
import useSection from '@/data/hooks/useSection'
import Link from 'next/link'

export default function HeaderDashboard() {
  const { user } = useSection()
  const [openDropdown, setOpenDropdown] = useState<'none' | 'chat' | 'notificacao' | 'rastreio' | 'user'>('none')

  const mensagens = [
    {
      id: 1,
      nome: 'João Pedro',
      texto: 'Sua encomenda chegou ao destino!',
      lida: false,
      data: '15/07/2025',
      avatar: '/avatar.png',
    },
    {
      id: 2,
      nome: 'Atendimento Xagami',
      texto: 'Estamos disponíveis para te ajudar!',
      lida: true,
      data: '14/07/2025',
      avatar: '/avatar.png',
    },
  ]
  const notificacoes = [
    {
      id: 1,
      texto: 'Pagamento confirmado para o serviço de transporte.',
      data: '15/07/2025',
      icon: <Bell className="w-5 h-5 text-blue-500" />,
    },
    {
      id: 2,
      texto: 'Nova reserva de hotel recebida.',
      data: '14/07/2025',
      icon: <Bell className="w-5 h-5 text-green-500" />,
    },
  ]

  const rastreamentos = [
    {
      id: 1,
      codigo: 'XTZ123456',
      status: 'Em trânsito',
      data: '15/07/2025',
    },
    {
      id: 2,
      codigo: 'XTZ654321',
      status: 'Entregue',
      data: '13/07/2025',
    },
  ]

  const toggleDropdown = (dropdown: typeof openDropdown) => {
    setOpenDropdown(prev => (prev === dropdown ? 'none' : dropdown))
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow px-6 py-3 flex items-center justify-end border-b">
      <div className="flex items-center gap-4 relative">
        {/* Notificações */}
        <button onClick={() => toggleDropdown('notificacao')} className="relative text-gray-600 hover:text-[#3664f4]">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full -mt-1 -mr-1">
            {notificacoes.length}
          </span>
        </button>

        {/* Rastreamento */}
        <button onClick={() => toggleDropdown('rastreio')} className="text-gray-600 hover:text-[#3664f4]">
          <PackageSearch className="w-6 h-6" />
        </button>

        {/* Chat */}
        <button onClick={() => toggleDropdown('chat')} className="relative text-gray-600 hover:text-[#3664f4]">
          <MessageSquareText className="w-6 h-6" />
          {mensagens.some(m => !m.lida) && (
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full -mt-1 -mr-1" />
          )}
        </button>

        {/* Avatar - clique mostra menu do utilizador */}
        <div onClick={() => toggleDropdown('user')} className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 cursor-pointer">
          <Image src="/avatar.png" alt="Avatar do utilizador" width={40} height={40} className="object-cover w-full h-full" />
        </div>

        {/* Dropdowns */}
        {openDropdown === 'chat' && (
          <DropdownPanel title="Mensagens" onClose={() => setOpenDropdown('none')}>
            {mensagens.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${
                  msg.lida ? 'bg-white hover:bg-gray-50' : 'bg-blue-50 hover:bg-blue-100'
                }`}
              >
                <Image src={msg.avatar} alt={msg.nome} width={40} height={40} className="rounded-full object-cover w-10 h-10" />
                <div className="flex flex-col text-sm overflow-hidden">
                  <span className={`truncate ${msg.lida ? 'font-normal text-gray-700' : 'font-semibold text-blue-900'}`}>
                    {msg.nome}
                  </span>
                  <span className={`truncate text-xs ${msg.lida ? 'text-gray-500' : 'text-blue-800'}`}>
                    {msg.texto}
                  </span>
                  <span className="text-[10px] text-gray-400 mt-1">{msg.data}</span>
                </div>
              </div>
            ))}
          </DropdownPanel>
        )}

        {openDropdown === 'notificacao' && (
          <DropdownPanel title="Notificações" onClose={() => setOpenDropdown('none')}>
            {notificacoes.map((n) => (
              <div key={n.id} className="flex items-start gap-2 p-2 hover:bg-gray-100 rounded-md text-sm">
                {n.icon}
                <div>
                  <p className="text-gray-700">{n.texto}</p>
                  <span className="text-[10px] text-gray-400">{n.data}</span>
                </div>
              </div>
            ))}
          </DropdownPanel>
        )}

        {openDropdown === 'rastreio' && (
          <DropdownPanel title="Rastreamento" onClose={() => setOpenDropdown('none')}>
            {rastreamentos.map((r) => (
              <div key={r.id} className="flex items-start gap-2 p-2 hover:bg-gray-100 rounded-md text-sm">
                <Truck className="w-5 h-5 text-indigo-500 mt-1" />
                <div>
                  <p className="text-gray-700">
                    Código: <span className="font-semibold">{r.codigo}</span>
                  </p>
                  <p className="text-xs text-gray-500">Status: {r.status}</p>
                  <span className="text-[10px] text-gray-400">{r.data}</span>
                </div>
              </div>
            ))}
          </DropdownPanel>
        )}

        {openDropdown === 'user' && (
          <DropdownPanel title="Conta" onClose={() => setOpenDropdown('none')}>
            <div className="text-sm px-2">
              <p className="font-semibold text-gray-800">{user?.name || 'Utilizador'}</p>
              <p className="text-xs text-gray-500 mb-2">{user?.email || 'sem email'}</p>
            </div>
            <Link href="/perfil" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              <User className="w-4 h-4" />
              Perfil
            </Link>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700 w-full text-left">
              <LogOut className="w-4 h-4" />
              Terminar sessão
            </button>
          </DropdownPanel>
        )}
      </div>
    </header>
  )
}

type DropdownProps = {
  title: string
  onClose: () => void
  children: React.ReactNode
}

function DropdownPanel({ title, onClose, children }: DropdownProps) {
  return (
    <div className="absolute top-14 right-0 w-80 bg-white border border-gray-200 shadow-lg rounded-lg z-50 p-3">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
        <button onClick={onClose} className="text-xs text-gray-400 hover:text-gray-600">Fechar</button>
      </div>
      <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">{children}</div>
    </div>
  )
}
