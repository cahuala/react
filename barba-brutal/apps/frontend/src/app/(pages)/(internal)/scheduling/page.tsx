'use client'

import SchedulingFrom from "@/components/scheduling/SchedulingFrom"
import HeaderWithTitle from "@/components/shared/HeaderWithTitle"


export default function Page(){
       return (
       
        <div className="flex flex-col gap-5">
            <HeaderWithTitle 
            title='Agendamentos de Serviços'
            description="Seja atendido exactamente no horário marcado."/>
            <div className="container py-10">
               
                <SchedulingFrom/>
            </div>
            
           
        </div>
        
    )
}