'use client'

import { CheckCircle, Clock, XCircle, Hotel } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx'

type Reserva = {
  id: string
  hospede: {
    nome: string
    avatar: string
  }
  hotel: string
  cidade: string
  dataEntrada: string
  dataSaida: string
  estado: 'pendente' | 'confirmada' | 'concluida' | 'cancelada'
}

const reservas: Reserva[] = [
  {
    id: 'RESV001',
    hospede: { nome: 'João Pedro', avatar: '/avatar1.png' },
    hotel: 'Hotel Central',
    cidade: 'Luanda',
    dataEntrada: '2025-07-15',
    dataSaida: '2025-07-17',
    estado: 'pendente',
  },
  {
    id: 'RESV002',
    hospede: { nome: 'Maria António', avatar: '/avatar2.png' },
    hotel: 'Hotel Tropico',
    cidade: 'Benguela',
    dataEntrada: '2025-07-10',
    dataSaida: '2025-07-14',
    estado: 'confirmada',
  },
  {
    id: 'RESV003',
    hospede: { nome: 'Carlos Mateus', avatar: '/avatar3.png' },
    hotel: 'Hotel Miramar',
    cidade: 'Namibe',
    dataEntrada: '2025-07-01',
    dataSaida: '2025-07-05',
    estado: 'concluida',
  },
  {
    id: 'RESV004',
    hospede: { nome: 'Ana Paulo', avatar: '/avatar4.png' },
    hotel: 'Hotel Baía',
    cidade: 'Huambo',
    dataEntrada: '2025-06-20',
    dataSaida: '2025-06-23',
    estado: 'cancelada',
  },
]

export default function TabelaReservas() {
  const getStatusInfo = (estado: Reserva['estado']) => {
    switch (estado) {
      case 'pendente':
        return {
          texto: 'Pendente',
          cor: 'text-yellow-600',
          bg: 'bg-yellow-100',
          icone: <Clock className="w-4 h-4" />,
        }
      case 'confirmada':
        return {
          texto: 'Confirmada',
          cor: 'text-blue-600',
          bg: 'bg-blue-100',
          icone: <Hotel className="w-4 h-4" />,
        }
      case 'concluida':
        return {
          texto: 'Concluída',
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
      <h2 className="text-xl font-semibold mb-4 text-[#3664f4]">Reservas de Hotéis</h2>
      <table className="min-w-full text-sm text-gray-700">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Código</th>
            <th className="p-3">Hóspede</th>
            <th className="p-3">Hotel</th>
            <th className="p-3">Cidade</th>
            <th className="p-3">Entrada</th>
            <th className="p-3">Saída</th>
            <th className="p-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => {
            const status = getStatusInfo(reserva.estado)
            return (
              <tr key={reserva.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{reserva.id}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src={reserva.hospede.avatar}
                      alt={reserva.hospede.nome}
                      width={32}
                      height={32}
                      className="rounded-full w-8 h-8 object-cover"
                    />
                    <span>{reserva.hospede.nome}</span>
                  </div>
                </td>
                <td className="p-3">{reserva.hotel}</td>
                <td className="p-3">{reserva.cidade}</td>
                <td className="p-3">{reserva.dataEntrada}</td>
                <td className="p-3">{reserva.dataSaida}</td>
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
