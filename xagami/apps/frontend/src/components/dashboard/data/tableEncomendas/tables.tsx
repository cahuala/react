'use client'

import { CheckCircle, Clock, Truck, XCircle } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx'

type Entrega = {
  id: string
  destinatario: string
  entregador: {
    nome: string
    avatar: string
  }
  origem: string
  destino: string
  data: string
  estado: 'pendente' | 'em_transito' | 'entregue' | 'cancelada'
}

const entregas: Entrega[] = [
  {
    id: 'XTZ123456',
    destinatario: 'João Pedro',
    entregador: {
      nome: 'Mário Silva',
      avatar: '/avatar.png',
    },
    origem: 'Luanda',
    destino: 'Benguela',
    data: '2025-07-15',
    estado: 'pendente',
  },
  {
    id: 'XTZ123457',
    destinatario: 'Maria António',
    entregador: {
      nome: 'Carlos Gomes',
      avatar: '/avatar.png',
    },
    origem: 'Huambo',
    destino: 'Luanda',
    data: '2025-07-14',
    estado: 'em_transito',
  },
  {
    id: 'XTZ123458',
    destinatario: 'Carlos Mateus',
    entregador: {
      nome: 'Elisa Jorge',
      avatar: '/avatar.png',
    },
    origem: 'Lubango',
    destino: 'Namibe',
    data: '2025-07-13',
    estado: 'entregue',
  },
  {
    id: 'XTZ123459',
    destinatario: 'Ana Paulo',
    entregador: {
      nome: 'Ricardo Pinto',
      avatar: '/avatar.png',
    },
    origem: 'Luanda',
    destino: 'Cabinda',
    data: '2025-07-12',
    estado: 'cancelada',
  },
]

export default function TabelaEntregas() {
  const getStatusInfo = (estado: Entrega['estado']) => {
    switch (estado) {
      case 'pendente':
        return {
          texto: 'Pendente',
          cor: 'text-yellow-600',
          bg: 'bg-yellow-100',
          icone: <Clock className="w-4 h-4" />,
        }
      case 'em_transito':
        return {
          texto: 'Em Trânsito',
          cor: 'text-blue-600',
          bg: 'bg-blue-100',
          icone: <Truck className="w-4 h-4" />,
        }
      case 'entregue':
        return {
          texto: 'Entregue',
          cor: 'text-green-600',
          bg: 'bg-green-100',
          icone: <CheckCircle className="w-4 h-4" />,
        }
      case 'cancelada':
        return {
          texto: 'Cancelada',
          cor: 'text-red-600',
          bg: 'bg-red-100',
          icone: <XCircle className="w-4 h-4" />,
        }
    }
  }

  return (
    <div className="bg-white shadow mt-6 rounded-xl p-4 overflow-auto">
      <h2 className="text-xl font-semibold mb-4 text-[#3664f4]">Entregas</h2>
      <table className="min-w-full text-sm text-gray-700">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Código</th>
            <th className="p-3">Destinatário</th>
            <th className="p-3">Entregador</th>
            <th className="p-3">Origem</th>
            <th className="p-3">Destino</th>
            <th className="p-3">Data</th>
            <th className="p-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {entregas.map((entrega) => {
            const status = getStatusInfo(entrega.estado)
            return (
              <tr key={entrega.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{entrega.id}</td>
                <td className="p-3">{entrega.destinatario}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src={entrega.entregador.avatar}
                      alt={entrega.entregador.nome}
                      width={32}
                      height={32}
                      className="rounded-full w-8 h-8 object-cover"
                    />
                    <span>{entrega.entregador.nome}</span>
                  </div>
                </td>
                <td className="p-3">{entrega.origem}</td>
                <td className="p-3">{entrega.destino}</td>
                <td className="p-3">{entrega.data}</td>
                <td className="p-3">
                  <span className={clsx("inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium", status.cor, status.bg)}>
                    {status.icone}
                    {status.texto}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
