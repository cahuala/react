'use client'

import DashboardCards from "@/components/dashboard/components/dashboard/Card"

import TabelaEntregas from "@/components/dashboard/data/tableEncomendas/tables"
import TabelaReservas from "@/components/dashboard/data/tables/TableReservas"
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default function Page() {
  const hoje = new Date()
  const dataFormatada = format(hoje, "EEEE, d 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  })

  return (
    <div className="flex flex-col px-4 md:px-8 py-6">
      {/* Título */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard</h1>
      
      {/* Data por extenso */}
      <p className="text-gray-500 mt-1 text-sm md:text-base capitalize">
        {dataFormatada}
      </p>

      {/* Cards */}
      <div className="mt-8 gap-4 p-8">
        <DashboardCards />
        <TabelaEntregas />
        <TabelaReservas/>
      </div>
    </div>
  )
}
