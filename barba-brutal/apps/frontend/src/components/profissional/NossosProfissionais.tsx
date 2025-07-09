/* eslint-disable @typescript-eslint/no-explicit-any */

import ItemProfissional from "./ItemProfissional";
import TitleSession from "../shared/TitleSession";
import useProfissionais from "@/data/hooks/useProfissionais";

export default function NossosProfissionais(){
   const { profissionais } = useProfissionais();
    return (
        <div className="flex flex-col gap-y-16">
            <TitleSession main="Nossos Profissionais" secundary="Os nossos profissionais são barbeiros e barbeiras altamente qualificados, dedicados ao cuidado e estilo capilar com excelência. Combinam técnica, criatividade e atenção aos detalhes para oferecer cortes modernos e personalizados." tag="Profissionais"/>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
            {
            profissionais.map((profissional:any)=>(
                <ItemProfissional key={profissional.id} profissional={profissional}/>
            ))}
        </div>
        </div>
    )
}