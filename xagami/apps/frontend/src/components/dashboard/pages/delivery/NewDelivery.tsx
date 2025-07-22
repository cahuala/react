'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, PlusCircle } from 'lucide-react'
import clsx from 'clsx'

type Encomenda = {
  id: string
  destinatario: string
  origem: string
  destino: string
  data: string
  estado: 'pendente' | 'em_transito' | 'entregue' | 'cancelada'
}

const dados: Encomenda[] = [
  {
    id: 'ENC001',
    destinatario: 'João Pedro',
    origem: 'Luanda',
    destino: 'Benguela',
    data: '2025-07-15',
    estado: 'pendente',
  },
  {
    id: 'ENC002',
    destinatario: 'Maria António',
    origem: 'Huambo',
    destino: 'Luanda',
    data: '2025-07-14',
    estado: 'em_transito',
  },
  {
    id: 'ENC003',
    destinatario: 'Carlos Mateus',
    origem: 'Lubango',
    destino: 'Namibe',
    data: '2025-07-13',
    estado: 'entregue',
  },
  {
    id: 'ENC004',
    destinatario: 'Ana Paulo',
    origem: 'Luanda',
    destino: 'Cabinda',
    data: '2025-07-12',
    estado: 'cancelada',
  },
]

export default function ListaEncomendas() {
  const router = useRouter()

  const [filtro, setFiltro] = useState('')

  const encomendasFiltradas = dados.filter((e) =>
    e.destinatario.toLowerCase().includes(filtro.toLowerCase()) ||
    e.id.toLowerCase().includes(filtro.toLowerCase()) ||
     e.destino.toLowerCase().includes(filtro.toLowerCase())
  )

  const getStatusStyle = (estado: Encomenda['estado']) => {
    switch (estado) {
      case 'pendente':
        return 'bg-yellow-100 text-yellow-700'
      case 'em_transito':
        return 'bg-blue-100 text-blue-700'
      case 'entregue':
        return 'bg-green-100 text-green-700'
      case 'cancelada':
        return 'bg-red-100 text-red-700'
    }
  }

  return (
    <div className="bg-white shadow rounded-xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-xl font-semibold text-[#3664f4]">Lista de Encomendas</h2>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              placeholder="Pesquisar..."
              className="pl-8 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
            />
          </div>
          <button
            className="flex items-center gap-1 bg-[#3664f4] text-white px-3 py-2 rounded-md hover:bg-blue-600 text-sm"
            onClick={() => router.push('/dashboard/client/newdelivery/form')}
          >
            <PlusCircle className="w-4 h-4" />
            Nova Solicitação
          </button>
        </div>
      </div>

      <table className="min-w-full text-sm text-gray-700">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Código</th>
            <th className="p-3">Destinatário</th>
            <th className="p-3">Origem</th>
            <th className="p-3">Destino</th>
            <th className="p-3">Data</th>
            <th className="p-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {encomendasFiltradas.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-6 text-gray-500">
                Nenhuma encomenda encontrada.
              </td>
            </tr>
          ) : (
            encomendasFiltradas.map((e) => (
              <tr key={e.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{e.id}</td>
                <td className="p-3">{e.destinatario}</td>
                <td className="p-3">{e.origem}</td>
                <td className="p-3">{e.destino}</td>
                <td className="p-3">{e.data}</td>
                <td className="p-3">
                  <span className={clsx("px-2 py-1 rounded-full text-xs font-semibold", getStatusStyle(e.estado))}>
                    {e.estado.replace('_', ' ').toUpperCase()}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
