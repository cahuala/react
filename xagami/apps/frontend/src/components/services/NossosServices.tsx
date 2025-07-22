/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import ItemService from "@/components/services/ItemService";
import TitleSession from "../shared/TitleSession";
import useService from "@/data/hooks/useService";
export default function NossosServices() {
  const { services } = useService()
  console.log(services)
  return (
    <div className="flex flex-col gap-y-16">
       <TitleSession main="Nossos Serviços" secundary="Unimos mobilidade, conforto e eficiência para transformar cada viagem numa experiência completa. Com soluções logísticas inteligentes, hospedagens selecionadas e transportes confiáveis, conectamos pessoas, negócios e destinos com excelência e compromisso." />
      <div className="grid grid-cols-1 xl:grid-cols-3  lg:grid-cols-2 gap-4 p-4">
        {
          
          services?.map((service:any) => (
            <ItemService key={service.id} service={service}/>
          ))
        }
      </div>
    </div>
  );
}