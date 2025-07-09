'use client'
import { Logistica } from "@xagami/core";
import { MapPin } from 'lucide-react';
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
import Image from "next/image";
import Avaliation from "../shared/Avaliation";
export interface ItemLogisticaProps {
    logistica: Logistica
}
export default function ItemLogistica(props: ItemLogisticaProps) {
   
  const { logistica } = props;
  return (
    <div className="flex flex-col rounded-xl bg-white overflow-hidden shadow-lg max-w-md">
  <div className="relative h-72 w-full">
    <Image
      className="object-cover"
      src={logistica.imageUrl}
      alt={logistica.name}
      fill
    />
  </div>

  <div className="flex flex-col p-4 gap-5">
    <span className="text-2xl font-black text-zinc-800 truncate">
      {logistica.name}
    </span>

    {/* Localização */}
    <div className="flex items-center text-sm text-zinc-500 gap-1">
      <MapPin className="w-4 h-4" />
      <span className="truncate">{logistica.location}</span>
    </div>

    {/* Descrição */}
    <p className="text-base text-zinc-600 text-justify line-clamp-3">
      {logistica.description}
    </p>

    {/* Avaliação */}
    <Avaliation note={logistica.avaliacao} qtde={logistica.avaliacao} />

    {/* Preço */}
    <span className="text-lg font-semibold text-[#3664f4]">
      {logistica.price.toFixed(2)} Kz
    </span>

    {/* Redes sociais */}
    <div className="flex gap-4 text-zinc-500 mt-2">
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
        <IconBrandYoutube stroke={1.5} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
        <IconBrandInstagram stroke={1.5} />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
        <IconBrandX stroke={1.5} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
        <IconBrandLinkedin stroke={1.5} />
      </a>
    </div>
  </div>
</div>
  );
}