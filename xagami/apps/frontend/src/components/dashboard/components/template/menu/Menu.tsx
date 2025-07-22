import { useState } from 'react'
import {
  IconForms,
  IconLayoutDashboard,
  IconListDetails,
  IconRepeat,
  IconSettings,
  IconMenu2,
  IconX,
  IconCalendar,
  IconMapPin,
  IconClock,
  IconCheck,
  IconX as IconCancel
} from '@tabler/icons-react'

import Logo from './Logo'
import MenuItem from './MenuItem'
import MenuSecao from './MenuSecao'
import useMenu from '../../../data/hooks/useMenu'

interface MenuProps {
  className?: string

}

export default function Menu(props: MenuProps) {
  const { mini, itemMenuClicado } = useMenu()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleClickItem = () => {
    itemMenuClicado()
    setMobileOpen(false)
  }

  return (
    <>
      {/* Botão para abrir o menu no mobile */}
      {!mobileOpen && (
        <div className="md:hidden fixed top-4 left-4 z-[9999]">
          <button onClick={() => setMobileOpen(true)}>
            <IconMenu2 className="w-7 h-7 text-gray-800" />
          </button>
        </div>
      )}

      {/* Menu lateral */}
      <div
        style={{ width: mini ? 76 : 300 }}
        className={`
          fixed z-[9999] inset-y-0 left-0
          transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:z-auto
          flex flex-col overflow-y-auto bg-[#f0f0f0]
          ${mini && 'items-center'}
          ${props.className ?? ''}
        `}
      >
        {/* Cabeçalho */}
        <div className={`flex justify-between items-center min-h-[74px] py-5 ${mini ? 'px-3.5' : 'px-5'}`}>
          <Logo mini={mini} />
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(false)}>
              <IconX className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Conteúdo do menu */}
        <div className={`flex flex-col flex-1 ${mini && 'items-center'}`}>

          <MenuSecao titulo="INÍCIO" mini={mini} />
          <MenuItem href="/" texto="Dashboard" icone={<IconLayoutDashboard />} mini={mini} onClick={handleClickItem} />

          <MenuSecao titulo="ENCOMENDAS" mini={mini} />
          <MenuItem href="/dashboard/client/newdelivery" texto="Nova Encomenda" icone={<IconForms />} mini={mini} onClick={handleClickItem} />
          <MenuItem href="/encomendas/em-processo" texto="Em Processamento" icone={<IconClock />} mini={mini} onClick={handleClickItem} />
          <MenuItem href="/encomendas/entregues" texto="Entregues" icone={<IconCheck />} mini={mini} onClick={handleClickItem} />
          <MenuItem href="/encomendas/canceladas" texto="Canceladas" icone={<IconCancel />} mini={mini} onClick={handleClickItem} />
          <MenuItem href="/encomendas/enderecos" texto="Endereços" icone={<IconMapPin />} mini={mini} onClick={handleClickItem} />

          <MenuSecao titulo="RESERVAS DE HOTÉIS" mini={mini} />
          <MenuItem href="/reservas" texto="Painel de Reservas" icone={<IconLayoutDashboard />} mini={mini} onClick={handleClickItem} />
          <MenuItem href="/reservas/nova" texto="Nova Reserva" icone={<IconForms />} mini={mini} onClick={handleClickItem} />
          <MenuItem href="/reservas/ativas" texto="Reservas Ativas" icone={<IconListDetails />} mini={mini} onClick={handleClickItem} />
          <MenuItem href="/reservas/passadas" texto="Histórico" icone={<IconRepeat />} mini={mini} onClick={handleClickItem} />
          <MenuItem href="/reservas/canceladas" texto="Canceladas" icone={<IconCancel />} mini={mini} onClick={handleClickItem} />
          <MenuItem href="/reservas/disponibilidade" texto="Ver Disponibilidade" icone={<IconCalendar />} mini={mini} onClick={handleClickItem} />

          <MenuSecao titulo="USUÁRIO" mini={mini} />
          <MenuItem href="/usuario/cadastro" texto="Cadastro de Usuário" icone={<IconForms />} mini={mini} onClick={handleClickItem} />
          <MenuItem href="/usuario/configuracoes" texto="Configurações" icone={<IconSettings />} mini={mini} onClick={handleClickItem} />
        </div>
      </div>
    </>
  )
}
