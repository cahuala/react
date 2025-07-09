/* eslint-disable @typescript-eslint/no-explicit-any */


import TitleSession from "../shared/TitleSession";
import useLogistica from "@/data/hooks/useLogistica";
import ItemLogistica from "./ItemLogistica";


export default function NossosLogistica(){
   const { logistica } = useLogistica();
    return (
        <div className="flex flex-col gap-y-16">
            <TitleSession main="Nossa Frota" secundary="Nossa frota é composta por veículos modernos, seguros e adaptados às mais diversas necessidades logísticas. De caminhões leves para entregas rápidas a carretas refrigeradas para transporte de cargas sensíveis, operamos com eficiência em todo o território nacional. Nossos motoristas são experientes e nossos veículos contam com rastreamento em tempo real, garantindo pontualidade, segurança e controle total em cada entrega."/>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
            {
            logistica.map((logistica:any)=>(
                <ItemLogistica key={logistica.id} logistica={logistica}/>
            ))}
        </div>
        </div>
    )
}