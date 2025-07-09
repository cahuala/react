'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';
import useAPI from '../hooks/useAPI';
import useSection from '../hooks/useSection';
import { DateUtils, Profissional, ScheduleUtils, Service } from '@xagami/core';
import { useRouter } from 'next/navigation';

export interface ScheduleContextProps {
    professional: Profissional | null;
    services: Service[];
    date: Date | null;
    dateValited:Date | null;
    selectedService:(sevices:Service[])=> void;
    selectedProfessional: (professional: Profissional | null) => void;
    selectedDate: (date: Date | null) => void;
    schedule: () => Promise<void>;
    canSchedule:()=>boolean
    totalDuraction:()=>string
    valueTotal:()=>number
}
const ScheduleContext = createContext<ScheduleContextProps>({} as any)

export function ScheduleContextProvider(props: any) {
    const [professional, setProfessional] = useState<Profissional | null>(null);
        const [services, setServices] = useState<Service[]>([]);
        const [date, setDate] = useState<Date | null>(null);
        const { httpPost } = useAPI()
        const { user } = useSection()
        const router = useRouter()


        function canSchedule(): boolean{
            if(!professional) return false;
            if(services.length === 0) return false
            if(!date) return false
            return date.getHours() >= 8 && date.getHours() <= 20
        }
        function totalDuraction(){
            
            return ScheduleUtils.allSchedules(services as any)
        }
        async function schedule() {
            
            await httpPost('/scheduling', {
                 professional,
                 user,
                 services,
                 data:date?.getTime()
            }); 
            router.push('/scheduling/success')
            clear()
        }
        function clear(){
            setProfessional(null)
            setServices([])
            setDate(DateUtils.toDayWithOh())

        }
        function valueTotal(){
            return services.reduce((acc, service)=>acc + service.price,0)
        }
    return <ScheduleContext.Provider value={{
            professional,
            services,
            date,
            get dateValited (){
                if(!date) return null
                if(date.getHours()< 8 || date.getHours()>20) return null

                return date
            },
            selectedService: setServices,
            selectedProfessional: setProfessional,
            selectedDate: setDate,
            schedule,
            canSchedule,
            totalDuraction,
            valueTotal

    }}>
            {props.children}
        </ScheduleContext.Provider>
    
}
export default ScheduleContext;