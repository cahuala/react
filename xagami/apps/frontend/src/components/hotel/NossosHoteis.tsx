/* eslint-disable @typescript-eslint/no-explicit-any */

import ItemProfissional from "./ItemHotel";
import TitleSession from "../shared/TitleSession";
import useProfissionais from "@/data/hooks/useProfissionais";

export default function NossosProfissionais(){
   const { profissionais } = useProfissionais();
    return (
        <div className="flex flex-col gap-y-16">
            <TitleSession main="Nossa rede de Hotéis" secundary="Explore a excelência em hospitalidade com a nossa rede de hotéis cuidadosamente selecionados em Angola. Conforto, segurança e localização estratégica para tornar cada estadia inesquecível — seja em viagens de negócios ou lazer.

"/>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
            {
            profissionais.map((profissional:any)=>(
                <ItemProfissional key={profissional.id} profissional={profissional}/>
            ))}
        </div>
        </div>
    )
}