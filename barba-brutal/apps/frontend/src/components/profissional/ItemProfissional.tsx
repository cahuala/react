'use client'
import { Profissional } from "@barbabrutal/core";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
import Image from "next/image";
import Avaliation from "../shared/Avaliation";
export interface ItemProfissionalProps {
    profissional: Profissional
}
export default function ItemProfissional(props: ItemProfissionalProps) {
   
  const { profissional } = props;
  return (
    <div className="flex flex-col rounded-xl bg-zinc-800 overflow-hidden">
        <div className="relative h-72 w-full">
            <Image className="object-cover object-top" src={profissional.imageUrl} alt={profissional.name} fill />
        </div>
       <div className="flex flex-col p-4 gap-5">
        <span className="text-2xl font-black"> {profissional.name}</span>
        <span className="text-sm text-zinc-400 flex-1"> {profissional.description}</span>
        <Avaliation note={profissional.avaliacao} qtde={profissional.avaliacao}/>
        <div className="flex gap-3 text-zinc-300">
            <IconBrandYoutube stroke={1} />
            <IconBrandInstagram stroke={1}/>
            <IconBrandX stroke={1}/>
            <IconBrandLinkedin stroke={1}/>
        </div>
        </div> 
    </div>
  );
}