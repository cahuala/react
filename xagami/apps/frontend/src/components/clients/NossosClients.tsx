import { clients } from "@xagami/core";

import TitleSession from "../shared/TitleSession";
import ItemClient from "./ItemClients";
import { LayoutGrid } from "../ui/layout-grid";

export default function NossosClients(){
    const classes =[
        'md:col-span-2',
        'col-span-1',
        'col-span-1',
        'md:col-span-2'
    ]
    const cards = clients.map((client, index)=>{
        return{
            id:client.id,
            content:<ItemClient name={client.name} testemunho={client.testmunho}/>,
            thumbnail: client.imageUrl,
            className:classes[index]
        }
    }

    )
    return (
        <div className="flex flex-col gap-y-16">
            <TitleSession main="Nossos Clientes" secundary="Os nossos clientes são as nossas prioridades" tag="Clientes"/>
        <div className="h-[900px] w-full">
            <LayoutGrid cards={cards}/>
        </div>
        </div>
    )
}