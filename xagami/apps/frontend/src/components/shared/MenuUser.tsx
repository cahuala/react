"use client"
import * as React from "react"
import Image from "next/image";
import { IconCalendar, IconHome, IconLogout } from "@tabler/icons-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import useSection from "@/data/hooks/useSection";

export default function MenuUser() {
  
  const { user, finishSection } = useSection();

  if (!user) return null;
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="font-bold">{user.name}</span>
            <span className="text-zinc-400 text-xs">{user.email}</span>
          </div>
          <div className="bg-zinc-700 w-10 h-10 p-1 rounded-full">
            <Image src="/avatar.png" width={40} height={40} alt="Avatar" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-dark w-56">
        <DropdownMenuLabel>Usuário</DropdownMenuLabel>
        <DropdownMenuSeparator />
       <DropdownMenuItem>
          <Link href="/" className="flex items-center gap-2 w-full">
            <IconHome size={18} />
            <span>Início</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/dashboard/client" className="flex items-center gap-2 w-full">
            <IconCalendar size={18} />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2 text-red-500 w-full"
          onClick={finishSection}
        >
          <IconLogout size={18} />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
