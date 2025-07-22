'use client'

import { useMemo } from 'react'
import { eachDayOfInterval, endOfMonth, format, isSameDay, isToday, startOfMonth } from 'date-fns'
import {pt} from 'date-fns/locale/pt'
import classNames from 'classnames'

type Entrega = {
  data: string // ISO format: "2025-07-17"
  status: 'pendente' | 'efetuada'
  titulo: string
}

const entregas: Entrega[] = [
  { data: '2025-07-18', status: 'pendente', titulo: 'Entrega ao João' },
  { data: '2025-07-19', status: 'efetuada', titulo: 'Entrega finalizada da Maria' },
  { data: '2025-07-21', status: 'pendente', titulo: 'Entrega para empresa XPTO' },
  { data: '2025-07-15', status: 'efetuada', titulo: 'Entrega completada' },
]

export default function CalendarioEntregas() {
  const hoje = new Date()
  const inicioMes = startOfMonth(hoje)
  const fimMes = endOfMonth(hoje)

  const dias = useMemo(() => {
    return eachDayOfInterval({ start: inicioMes, end: fimMes })
  }, [inicioMes, fimMes])

  function getEntregaData(day: Date): Entrega | undefined {
    return entregas.find(entrega => isSameDay(new Date(entrega.data), day))
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-[#3664f4]">Entregas de {format(hoje, 'MMMM yyyy', { locale: pt })}</h2>
      <div className="grid grid-cols-7 border border-gray-200 rounded overflow-hidden">
        {/* Cabeçalho dias da semana */}
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map((dia, idx) => (
          <div key={idx} className="bg-gray-100 text-center py-2 text-sm font-semibold">
            {dia}
          </div>
        ))}

        {/* Espaço até o primeiro dia do mês (offset) */}
        {[...Array(inicioMes.getDay())].map((_, idx) => (
          <div key={`empty-${idx}`} className="h-20 border border-gray-100 bg-gray-50"></div>
        ))}

        {/* Dias do mês */}
        {dias.map((day, idx) => {
          const entrega = getEntregaData(day)
          const isTodayDate = isToday(day)

          const baseClasses =
            'h-20 border border-gray-100 flex flex-col items-start justify-start p-1 text-sm'

          const entregaClasses = classNames({
            'bg-blue-100 text-blue-800 font-medium': entrega?.status === 'efetuada',
            'bg-blue-600 text-white': entrega?.status === 'pendente',
            'bg-white': !entrega,
          })

          const hojeClasses = isTodayDate ? 'ring-2 ring-[#3664f4]' : ''

          return (
            <div key={idx} className={classNames(baseClasses, entregaClasses, hojeClasses)}>
              <span className="text-xs font-semibold">{day.getDate()}</span>
              {entrega && (
                <span className="text-xs mt-1 truncate">
                  {entrega.titulo}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
