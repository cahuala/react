'use client'
import { Service } from "@xagami/core";
import Image from "next/image";
export interface ItemServiceProps {
    service: Service
}
export default function ItemService(props: ItemServiceProps) {
   
  const { service } = props;
  return (
    <div className="flex rounded-xl bg-zinc-100 overflow-hidden shadow-md max-w-md">
  <Image
    className="object-cover w-[150px] h-[150px]"
    src={service.imagemUrl}
    alt={service.name}
    width={150}
    height={150}
  />
  
  <div className="flex flex-col justify-between p-5 gap-2 flex-1">
  <span className="text-xl font-bold text-zinc-800">{service.name}</span>
  
  <p className="text-base text-zinc-500  line-clamp-3">
    {service.description}
  </p>
</div>

</div>

  );
}