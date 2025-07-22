/* eslint-disable @typescript-eslint/no-explicit-any */

import ItemHotel from "./ItemHotel";
import TitleSession from "../shared/TitleSession";
import useHotels from "@/data/hooks/useHotels";

export default function NossosHoteis(){
   const { hotels } = useHotels();
    return (
        <div className="flex flex-col gap-y-16">
            <TitleSession main="Nossa rede de Hotéis" secundary="Explore a excelência em hospitalidade com a nossa rede de hotéis cuidadosamente selecionados em Angola. Conforto, segurança e localização estratégica para tornar cada estadia inesquecível — seja em viagens de negócios ou lazer.

"/>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
            {
            hotels.map((hotel:any)=>(
                <ItemHotel key={hotel.id} hotel={hotel}/>
            ))}
        </div>
        </div>
    )
}