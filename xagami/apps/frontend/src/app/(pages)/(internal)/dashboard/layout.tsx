/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import HeaderDashboard from "@/components/dashboard/components/template/cabecalho/Cabecalho"
import MenuResponsivo from "@/components/dashboard/components/template/menu/MenuResponsivo"
import Conteudo from "@/components/dashboard/components/template/base/Conteudo"
import { ForceAutentication } from "@/components/shared/forcedAutentication"

export default function Layout(props: any) {
  return (
    <ForceAutentication>
      <div className="flex h-screen bg-[#f0f0f0] text-black overflow-hidden">
        {/* Menu lateral fixo */}
        <MenuResponsivo />

        {/* Área principal */}
        <div className="flex flex-col flex-1 min-h-screen overflow-auto">
          <HeaderDashboard />
          <Conteudo className={props.className ?? ''}>
            {props.children}
          </Conteudo>
        </div>
      </div>
    </ForceAutentication>
  )
}
